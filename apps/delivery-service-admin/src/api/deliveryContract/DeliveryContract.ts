import { Order } from "../order/Order";
import { PerformerProfile } from "../performerProfile/PerformerProfile";

export type DeliveryContract = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  terms: string | null;
  price: number | null;
  status?: "Option1" | null;
  order?: Order | null;
  performerProfile?: PerformerProfile | null;
};
