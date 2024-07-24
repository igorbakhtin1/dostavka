import * as graphql from "@nestjs/graphql";
import { DeliveryContractResolverBase } from "./base/deliveryContract.resolver.base";
import { DeliveryContract } from "./base/DeliveryContract";
import { DeliveryContractService } from "./deliveryContract.service";

@graphql.Resolver(() => DeliveryContract)
export class DeliveryContractResolver extends DeliveryContractResolverBase {
  constructor(protected readonly service: DeliveryContractService) {
    super(service);
  }
}
