import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comment?: SortOrder;
  rating?: SortOrder;
  userId?: SortOrder;
  performerProfileId?: SortOrder;
};
