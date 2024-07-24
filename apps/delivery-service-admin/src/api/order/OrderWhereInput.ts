import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DeliveryContractListRelationFilter } from "../deliveryContract/DeliveryContractListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  pointA?: StringNullableFilter;
  weight?: IntNullableFilter;
  size?: StringNullableFilter;
  remuneration?: FloatNullableFilter;
  status?: "Option1";
  description?: StringNullableFilter;
  pointB?: StringNullableFilter;
  deliveryTime?: DateTimeNullableFilter;
  sender?: StringNullableFilter;
  deliveryContracts?: DeliveryContractListRelationFilter;
};
