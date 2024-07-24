import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerformerProfileServiceBase } from "./base/performerProfile.service.base";

@Injectable()
export class PerformerProfileService extends PerformerProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
