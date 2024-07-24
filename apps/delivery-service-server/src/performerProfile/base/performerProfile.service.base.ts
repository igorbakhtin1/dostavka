/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PerformerProfile as PrismaPerformerProfile,
  Feedback as PrismaFeedback,
  DeliveryContract as PrismaDeliveryContract,
  User as PrismaUser,
} from "@prisma/client";

export class PerformerProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PerformerProfileCountArgs, "select">
  ): Promise<number> {
    return this.prisma.performerProfile.count(args);
  }

  async performerProfiles(
    args: Prisma.PerformerProfileFindManyArgs
  ): Promise<PrismaPerformerProfile[]> {
    return this.prisma.performerProfile.findMany(args);
  }
  async performerProfile(
    args: Prisma.PerformerProfileFindUniqueArgs
  ): Promise<PrismaPerformerProfile | null> {
    return this.prisma.performerProfile.findUnique(args);
  }
  async createPerformerProfile(
    args: Prisma.PerformerProfileCreateArgs
  ): Promise<PrismaPerformerProfile> {
    return this.prisma.performerProfile.create(args);
  }
  async updatePerformerProfile(
    args: Prisma.PerformerProfileUpdateArgs
  ): Promise<PrismaPerformerProfile> {
    return this.prisma.performerProfile.update(args);
  }
  async deletePerformerProfile(
    args: Prisma.PerformerProfileDeleteArgs
  ): Promise<PrismaPerformerProfile> {
    return this.prisma.performerProfile.delete(args);
  }

  async findFeedbacks(
    parentId: string,
    args: Prisma.FeedbackFindManyArgs
  ): Promise<PrismaFeedback[]> {
    return this.prisma.performerProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .feedbacks(args);
  }

  async findDeliveryContracts(
    parentId: string,
    args: Prisma.DeliveryContractFindManyArgs
  ): Promise<PrismaDeliveryContract[]> {
    return this.prisma.performerProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .deliveryContracts(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.performerProfile
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}