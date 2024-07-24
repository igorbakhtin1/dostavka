import { FeedbackCreateNestedManyWithoutPerformerProfilesInput } from "./FeedbackCreateNestedManyWithoutPerformerProfilesInput";
import { DeliveryContractCreateNestedManyWithoutPerformerProfilesInput } from "./DeliveryContractCreateNestedManyWithoutPerformerProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PerformerProfileCreateInput = {
  feedbacks?: FeedbackCreateNestedManyWithoutPerformerProfilesInput;
  rating?: number | null;
  deliveryContracts?: DeliveryContractCreateNestedManyWithoutPerformerProfilesInput;
  user?: UserWhereUniqueInput | null;
};
