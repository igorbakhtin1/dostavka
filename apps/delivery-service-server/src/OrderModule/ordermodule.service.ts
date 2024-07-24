import { Injectable } from "@nestjs/common";
import { OrderCreateDto } from "../orderModule/OrderCreateDto";
import { OrderOutput } from "../orderModule/OrderOutput";

@Injectable()
export class OrderModuleService {
  constructor() {}
  async CreateOrder(args: OrderCreateDto): Promise<OrderOutput> {
    throw new Error("Not implemented");
  }
  async GetOrderById(args: string): Promise<OrderOutput> {
    throw new Error("Not implemented");
  }
  async ListOrders(args: string): Promise<OrderOutput[]> {
    throw new Error("Not implemented");
  }
}
