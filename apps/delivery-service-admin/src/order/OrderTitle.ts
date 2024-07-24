import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "pointA";

export const OrderTitle = (record: TOrder): string => {
  return record.pointA?.toString() || String(record.id);
};
