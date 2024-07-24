import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { PerformerProfileListRelationFilter } from "../performerProfile/PerformerProfileListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  performerProfiles?: PerformerProfileListRelationFilter;
};
