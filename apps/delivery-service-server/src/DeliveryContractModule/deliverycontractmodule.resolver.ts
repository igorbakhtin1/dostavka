import * as graphql from "@nestjs/graphql";
import { OrderCreateDto } from "../orderModule/OrderCreateDto";
import { OrderOutput } from "../orderModule/OrderOutput";
import { DeliveryContractModuleService } from "./deliverycontractmodule.service";

export class DeliveryContractModuleResolver {
  constructor(protected readonly service: DeliveryContractModuleService) {}

  @graphql.Mutation(() => OrderOutput)
  async AssignPerformerToOrder(
    @graphql.Args()
    args: OrderCreateDto
  ): Promise<OrderOutput> {
    return this.service.AssignPerformerToOrder(args);
  }

  @graphql.Query(() => OrderOutput)
  async TrackDeliveryStatus(
    @graphql.Args()
    args: string
  ): Promise<OrderOutput> {
    return this.service.TrackDeliveryStatus(args);
  }
}
