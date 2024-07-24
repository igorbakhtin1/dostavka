import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderModuleService } from "./ordermodule.service";
import { OrderOutput } from "../orderModule/OrderOutput";

@swagger.ApiTags("orderModules")
@common.Controller("orderModules")
export class OrderModuleController {
  constructor(protected readonly service: OrderModuleService) {}

  @common.Post("/order")
  @swagger.ApiOkResponse({
    type: OrderOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateOrder(
    @common.Body()
    body: string
  ): Promise<OrderOutput> {
        return this.service.CreateOrder(body);
      }

  @common.Get("/order/:id")
  @swagger.ApiOkResponse({
    type: OrderOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetOrderById(
    @common.Body()
    body: string
  ): Promise<OrderOutput> {
        return this.service.GetOrderById(body);
      }

  @common.Get("/orders")
  @swagger.ApiOkResponse({
    type: OrderOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListOrders(
    @common.Body()
    body: string
  ): Promise<OrderOutput[]> {
        return this.service.ListOrders(body);
      }
}
