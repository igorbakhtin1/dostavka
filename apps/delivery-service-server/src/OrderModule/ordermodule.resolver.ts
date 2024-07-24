import * as graphql from "@nestjs/graphql";
import { OrderCreateDto } from "../orderModule/OrderCreateDto";
import { OrderOutput } from "../orderModule/OrderOutput";
import { OrderModuleService } from "./ordermodule.service";

export class OrderModuleResolver {
  constructor(protected readonly service: OrderModuleService) {}

  @graphql.Mutation(() => OrderOutput)
  async CreateOrder(
    @graphql.Args()
    args: OrderCreateDto
  ): Promise<OrderOutput> {
    return this.service.CreateOrder(args);
  }

  @graphql.Query(() => OrderOutput)
  async GetOrderById(
    @graphql.Args()
    args: string
  ): Promise<OrderOutput> {
    return this.service.GetOrderById(args);
  }

  @graphql.Query(() => [OrderOutput])
  async ListOrders(
    @graphql.Args()
    args: string
  ): Promise<OrderOutput[]> {
    return this.service.ListOrders(args);
  }
}
