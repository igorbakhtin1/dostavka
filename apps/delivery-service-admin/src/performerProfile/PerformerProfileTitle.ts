import { PerformerProfile as TPerformerProfile } from "../api/performerProfile/PerformerProfile";

export const PERFORMERPROFILE_TITLE_FIELD = "id";

export const PerformerProfileTitle = (record: TPerformerProfile): string => {
  return record.id?.toString() || String(record.id);
};
