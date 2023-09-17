import { IIdAndTimestamps } from "../../types";
import { uuid } from "../../types/common/datatypes";

export interface UserProfileModel extends IIdAndTimestamps {
  userId: uuid;
  name: string;
  firstSurname: string;
  secondSurname: string;
  email: string;
}
