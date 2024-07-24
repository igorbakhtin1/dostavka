import { FeedbackUpdateManyWithoutPerformerProfilesInput } from "./FeedbackUpdateManyWithoutPerformerProfilesInput";
import { DeliveryContractUpdateManyWithoutPerformerProfilesInput } from "./DeliveryContractUpdateManyWithoutPerformerProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PerformerProfileUpdateInput = {
  feedbacks?: FeedbackUpdateManyWithoutPerformerProfilesInput;
  rating?: number | null;
  deliveryContracts?: DeliveryContractUpdateManyWithoutPerformerProfilesInput;
  user?: UserWhereUniqueInput | null;
};
