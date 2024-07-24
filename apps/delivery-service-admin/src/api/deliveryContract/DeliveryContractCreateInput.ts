import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PerformerProfileWhereUniqueInput } from "../performerProfile/PerformerProfileWhereUniqueInput";

export type DeliveryContractCreateInput = {
  terms?: string | null;
  price?: number | null;
  status?: "Option1" | null;
  order?: OrderWhereUniqueInput | null;
  performerProfile?: PerformerProfileWhereUniqueInput | null;
};
