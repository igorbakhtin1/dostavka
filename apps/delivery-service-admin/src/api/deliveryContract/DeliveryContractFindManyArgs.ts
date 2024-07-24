import { DeliveryContractWhereInput } from "./DeliveryContractWhereInput";
import { DeliveryContractOrderByInput } from "./DeliveryContractOrderByInput";

export type DeliveryContractFindManyArgs = {
  where?: DeliveryContractWhereInput;
  orderBy?: Array<DeliveryContractOrderByInput>;
  skip?: number;
  take?: number;
};
