import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PerformerProfileWhereUniqueInput } from "../performerProfile/PerformerProfileWhereUniqueInput";

export type FeedbackUpdateInput = {
  comment?: string | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
  performerProfile?: PerformerProfileWhereUniqueInput | null;
};
