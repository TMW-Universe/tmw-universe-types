import {
  Currency,
  ITimestamps,
  Language,
  Theme,
  WeightUnit,
  uuid,
} from "../../types";

export interface UserPreferencesModel extends Omit<ITimestamps, "deletedAt"> {
  id: uuid;

  userId: uuid;
  language: Language;
  weightUnit: WeightUnit;
  currency: Currency;
  color: string;
  theme: Theme;
  dateFormat?: string;
}
