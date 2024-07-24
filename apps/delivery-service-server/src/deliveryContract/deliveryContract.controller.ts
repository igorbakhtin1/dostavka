import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryContractService } from "./deliveryContract.service";
import { DeliveryContractControllerBase } from "./base/deliveryContract.controller.base";

@swagger.ApiTags("deliveryContracts")
@common.Controller("deliveryContracts")
export class DeliveryContractController extends DeliveryContractControllerBase {
  constructor(protected readonly service: DeliveryContractService) {
    super(service);
  }
}
