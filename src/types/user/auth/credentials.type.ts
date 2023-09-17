import { UserPreferencesModel } from "../../../models/user/user-preferences.model";
import { Account } from "./account.model";

export interface Credentials {
  accessToken: string;
  account?: Account;
  preferences?: Omit<
    UserPreferencesModel,
    "userId" | "user" | "createdAt" | "updatedAt" | "id"
  >;
}
