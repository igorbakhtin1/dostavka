import { DeliveryContract } from "../deliveryContract/DeliveryContract";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  pointA: string | null;
  weight: number | null;
  size: string | null;
  remuneration: number | null;
  status?: "Option1" | null;
  description: string | null;
  pointB: string | null;
  deliveryTime: Date | null;
  sender: string | null;
  deliveryContracts?: Array<DeliveryContract>;
};
