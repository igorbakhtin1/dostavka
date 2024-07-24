import { Injectable } from "@nestjs/common";
import { UserOutput } from "../performerProfileModule/UserOutput";

@Injectable()
export class PerformerProfileModuleService {
  constructor() {}
  async ListPerformersHeadingInADirection(args: string): Promise<UserOutput[]> {
    throw new Error("Not implemented");
  }
}
