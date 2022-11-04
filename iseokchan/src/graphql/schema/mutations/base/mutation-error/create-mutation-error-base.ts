import { interfaceType } from "nexus";

import { MutationErrorBase } from "./base/mutation-error-base";

export type CreateMutationErrorBase = MutationErrorBase & {};

export const CreateMutationErrorBaseType = interfaceType({
  name: "CreateMutationErrorBase",
  definition(t) {
    t.implements("MutationErrorBase");
  },
});
