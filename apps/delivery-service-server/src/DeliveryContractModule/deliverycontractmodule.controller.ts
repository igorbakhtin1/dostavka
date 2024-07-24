import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DeliveryContractModuleService } from "./deliverycontractmodule.service";
import { OrderOutput } from "../orderModule/OrderOutput";

@swagger.ApiTags("deliveryContractModules")
@common.Controller("deliveryContractModules")
export class DeliveryContractModuleController {
  constructor(protected readonly service: DeliveryContractModuleService) {}

  @common.Post("/assign-performer")
  @swagger.ApiOkResponse({
    type: OrderOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AssignPerformerToOrder(
    @common.Body()
    body: string
  ): Promise<OrderOutput> {
        return this.service.AssignPerformerToOrder(body);
      }

  @common.Get("/delivery-status/:id")
  @swagger.ApiOkResponse({
    type: OrderOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TrackDeliveryStatus(
    @common.Body()
    body: string
  ): Promise<OrderOutput> {
        return this.service.TrackDeliveryStatus(body);
      }
}
