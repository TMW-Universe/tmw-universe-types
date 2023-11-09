import { UserPreferencesModel } from "../../../models";

export interface Account {
  id: string;
  name: string;
  firstSurname: string;
  secondSurname: string;
  email: string;
  username: string;
  birthDate: Date;
  preferences?: Omit<
    UserPreferencesModel,
    "id" | "user" | "userId" | "createdAt" | "updatedAt"
  >;
}
