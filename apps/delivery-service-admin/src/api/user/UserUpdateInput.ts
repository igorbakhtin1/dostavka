import { InputJsonValue } from "../../types";
import { FeedbackUpdateManyWithoutUsersInput } from "./FeedbackUpdateManyWithoutUsersInput";
import { PerformerProfileUpdateManyWithoutUsersInput } from "./PerformerProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  feedbacks?: FeedbackUpdateManyWithoutUsersInput;
  performerProfiles?: PerformerProfileUpdateManyWithoutUsersInput;
};
