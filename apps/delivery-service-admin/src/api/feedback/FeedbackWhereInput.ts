import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PerformerProfileWhereUniqueInput } from "../performerProfile/PerformerProfileWhereUniqueInput";

export type FeedbackWhereInput = {
  id?: StringFilter;
  comment?: StringNullableFilter;
  rating?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  performerProfile?: PerformerProfileWhereUniqueInput;
};
