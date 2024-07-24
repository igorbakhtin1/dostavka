import * as graphql from "@nestjs/graphql";
import { UserOutput } from "../performerProfileModule/UserOutput";
import { PerformerProfileModuleService } from "./performerprofilemodule.service";

export class PerformerProfileModuleResolver {
  constructor(protected readonly service: PerformerProfileModuleService) {}

  @graphql.Query(() => [UserOutput])
  async ListPerformersHeadingInADirection(
    @graphql.Args()
    args: string
  ): Promise<UserOutput[]> {
    return this.service.ListPerformersHeadingInADirection(args);
  }
}
