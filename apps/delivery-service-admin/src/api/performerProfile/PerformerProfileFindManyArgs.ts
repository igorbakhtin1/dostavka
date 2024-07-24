import { PerformerProfileWhereInput } from "./PerformerProfileWhereInput";
import { PerformerProfileOrderByInput } from "./PerformerProfileOrderByInput";

export type PerformerProfileFindManyArgs = {
  where?: PerformerProfileWhereInput;
  orderBy?: Array<PerformerProfileOrderByInput>;
  skip?: number;
  take?: number;
};
