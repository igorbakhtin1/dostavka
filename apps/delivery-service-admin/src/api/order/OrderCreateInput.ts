import { DeliveryContractCreateNestedManyWithoutOrdersInput } from "./DeliveryContractCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  pointA?: string | null;
  weight?: number | null;
  size?: string | null;
  remuneration?: number | null;
  status?: "Option1" | null;
  description?: string | null;
  pointB?: string | null;
  deliveryTime?: Date | null;
  sender?: string | null;
  deliveryContracts?: DeliveryContractCreateNestedManyWithoutOrdersInput;
};
