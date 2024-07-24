import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerformerProfileService } from "./performerProfile.service";
import { PerformerProfileControllerBase } from "./base/performerProfile.controller.base";

@swagger.ApiTags("performerProfiles")
@common.Controller("performerProfiles")
export class PerformerProfileController extends PerformerProfileControllerBase {
  constructor(protected readonly service: PerformerProfileService) {
    super(service);
  }
}
