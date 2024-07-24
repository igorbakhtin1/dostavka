import { DeliveryContract as TDeliveryContract } from "../api/deliveryContract/DeliveryContract";

export const DELIVERYCONTRACT_TITLE_FIELD = "id";

export const DeliveryContractTitle = (record: TDeliveryContract): string => {
  return record.id?.toString() || String(record.id);
};
