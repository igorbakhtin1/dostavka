import * as graphql from "@nestjs/graphql";
import { PerformerProfileResolverBase } from "./base/performerProfile.resolver.base";
import { PerformerProfile } from "./base/PerformerProfile";
import { PerformerProfileService } from "./performerProfile.service";

@graphql.Resolver(() => PerformerProfile)
export class PerformerProfileResolver extends PerformerProfileResolverBase {
  constructor(protected readonly service: PerformerProfileService) {
    super(service);
  }
}
