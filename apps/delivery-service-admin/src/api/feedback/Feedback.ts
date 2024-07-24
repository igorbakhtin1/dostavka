import { User } from "../user/User";
import { PerformerProfile } from "../performerProfile/PerformerProfile";

export type Feedback = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  comment: string | null;
  rating: number | null;
  user?: User | null;
  performerProfile?: PerformerProfile | null;
};
