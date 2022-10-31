import { interfaceType } from "nexus";

import { MutationErrorBase } from "./base/mutation-error-base";

export type CreateMutationErrorBase = MutationErrorBase & {};

export const createMutationErrorBase = interfaceType({
  name: "CreateMutationErrorBase",
  definition(t) {
    t.implements("MutationErrorBase");
  },
});
