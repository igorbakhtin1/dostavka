import { JsonValue } from "type-fest";
import { Feedback } from "../feedback/Feedback";
import { PerformerProfile } from "../performerProfile/PerformerProfile";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  feedbacks?: Array<Feedback>;
  performerProfiles?: Array<PerformerProfile>;
};
