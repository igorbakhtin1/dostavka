import { Injectable } from "@nestjs/common";
import { OrderCreateDto } from "../orderModule/OrderCreateDto";
import { OrderOutput } from "../orderModule/OrderOutput";

@Injectable()
export class DeliveryContractModuleService {
  constructor() {}
  async AssignPerformerToOrder(args: OrderCreateDto): Promise<OrderOutput> {
    throw new Error("Not implemented");
  }
  async TrackDeliveryStatus(args: string): Promise<OrderOutput> {
    throw new Error("Not implemented");
  }
}
