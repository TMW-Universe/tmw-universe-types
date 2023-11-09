import { date, object, string } from "yup";

export const accountSchema = object({
  id: string().uuid().required(),
  name: string().required(),
  firstSurname: string().required(),
  secondSurname: string().required(),
  email: string().required(),
  username: string().required(),
  birthDate: date().required(),
});
