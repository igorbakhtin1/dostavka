import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryContractServiceBase } from "./base/deliveryContract.service.base";

@Injectable()
export class DeliveryContractService extends DeliveryContractServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
