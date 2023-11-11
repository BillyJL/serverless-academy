import { Resolve, Reject } from "../../core";

export type CreateStreamArgs<Type> = {
  csvFilePath: string;
  resolve: Resolve<Type>;
  reject: Reject;
}