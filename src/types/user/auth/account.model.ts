import { UserPreferencesModel } from "../../../models";

export interface Account {
  id: string;
  name: string;
  firstSurname: string;
  secondSurname: string;
  email: string;
  username: string;
  preferences?: UserPreferencesModel;
}
