import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PerformerProfileModuleService } from "./performerprofilemodule.service";
import { UserOutput } from "../performerProfileModule/UserOutput";

@swagger.ApiTags("performerProfileModules")
@common.Controller("performerProfileModules")
export class PerformerProfileModuleController {
  constructor(protected readonly service: PerformerProfileModuleService) {}

  @common.Get("/performers")
  @swagger.ApiOkResponse({
    type: UserOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListPerformersHeadingInADirection(
    @common.Body()
    body: string
  ): Promise<UserOutput[]> {
        return this.service.ListPerformersHeadingInADirection(body);
      }
}
