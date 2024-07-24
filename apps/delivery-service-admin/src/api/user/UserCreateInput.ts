import { InputJsonValue } from "../../types";
import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { PerformerProfileCreateNestedManyWithoutUsersInput } from "./PerformerProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  feedbacks?: FeedbackCreateNestedManyWithoutUsersInput;
  performerProfiles?: PerformerProfileCreateNestedManyWithoutUsersInput;
};
