import { Module } from "@nestjs/common";
import { DeliveryContractModuleService } from "./deliverycontractmodule.service";
import { DeliveryContractModuleController } from "./deliverycontractmodule.controller";
import { DeliveryContractModuleResolver } from "./deliverycontractmodule.resolver";

@Module({
  controllers: [DeliveryContractModuleController],
  providers: [DeliveryContractModuleService, DeliveryContractModuleResolver],
  exports: [DeliveryContractModuleService],
})
export class DeliveryContractModuleModule {}
