import { StringFilter } from "../../util/StringFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DeliveryContractListRelationFilter } from "../deliveryContract/DeliveryContractListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PerformerProfileWhereInput = {
  id?: StringFilter;
  feedbacks?: FeedbackListRelationFilter;
  rating?: FloatNullableFilter;
  deliveryContracts?: DeliveryContractListRelationFilter;
  user?: UserWhereUniqueInput;
};
