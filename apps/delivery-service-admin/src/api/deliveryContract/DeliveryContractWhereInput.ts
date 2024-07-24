import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PerformerProfileWhereUniqueInput } from "../performerProfile/PerformerProfileWhereUniqueInput";

export type DeliveryContractWhereInput = {
  id?: StringFilter;
  terms?: StringNullableFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
  order?: OrderWhereUniqueInput;
  performerProfile?: PerformerProfileWhereUniqueInput;
};
