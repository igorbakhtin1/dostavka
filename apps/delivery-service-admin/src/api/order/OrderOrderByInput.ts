import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  pointA?: SortOrder;
  weight?: SortOrder;
  size?: SortOrder;
  remuneration?: SortOrder;
  status?: SortOrder;
  description?: SortOrder;
  pointB?: SortOrder;
  deliveryTime?: SortOrder;
  sender?: SortOrder;
};
