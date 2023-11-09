import { InferType } from "yup";
import { UserPreferencesModel } from "../../../models";
import { accountSchema } from "../../../schemas/auth/account/account.schema";

export interface Account extends InferType<typeof accountSchema> {
  preferences?: Omit<
    UserPreferencesModel,
    "id" | "user" | "userId" | "createdAt" | "updatedAt"
  >;
}
