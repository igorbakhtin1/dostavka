import { Module } from "@nestjs/common";
import { PerformerProfileModuleService } from "./performerprofilemodule.service";
import { PerformerProfileModuleController } from "./performerprofilemodule.controller";
import { PerformerProfileModuleResolver } from "./performerprofilemodule.resolver";

@Module({
  controllers: [PerformerProfileModuleController],
  providers: [PerformerProfileModuleService, PerformerProfileModuleResolver],
  exports: [PerformerProfileModuleService],
})
export class PerformerProfileModuleModule {}
