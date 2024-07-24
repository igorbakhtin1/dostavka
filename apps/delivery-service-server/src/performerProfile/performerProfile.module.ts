import { Module } from "@nestjs/common";
import { PerformerProfileModuleBase } from "./base/performerProfile.module.base";
import { PerformerProfileService } from "./performerProfile.service";
import { PerformerProfileController } from "./performerProfile.controller";
import { PerformerProfileResolver } from "./performerProfile.resolver";

@Module({
  imports: [PerformerProfileModuleBase],
  controllers: [PerformerProfileController],
  providers: [PerformerProfileService, PerformerProfileResolver],
  exports: [PerformerProfileService],
})
export class PerformerProfileModule {}
