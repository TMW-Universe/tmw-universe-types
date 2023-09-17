import { uuid } from "../datatypes";
import { ITimestamps } from "./timestamps.interface";

export interface IIdAndTimestamps extends ITimestamps {
  id: uuid;
}
