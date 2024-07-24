import { Feedback } from "../feedback/Feedback";
import { DeliveryContract } from "../deliveryContract/DeliveryContract";
import { User } from "../user/User";

export type PerformerProfile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  feedbacks?: Array<Feedback>;
  rating: number | null;
  deliveryContracts?: Array<DeliveryContract>;
  user?: User | null;
};
