import { Module } from "@nestjs/common";
import { DeliveryContractModuleBase } from "./base/deliveryContract.module.base";
import { DeliveryContractService } from "./deliveryContract.service";
import { DeliveryContractController } from "./deliveryContract.controller";
import { DeliveryContractResolver } from "./deliveryContract.resolver";

@Module({
  imports: [DeliveryContractModuleBase],
  controllers: [DeliveryContractController],
  providers: [DeliveryContractService, DeliveryContractResolver],
  exports: [DeliveryContractService],
})
export class DeliveryContractModule {}
