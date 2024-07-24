import { SortOrder } from "../../util/SortOrder";

export type DeliveryContractOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  terms?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  orderId?: SortOrder;
  performerProfileId?: SortOrder;
};
