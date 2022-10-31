import { interfaceType } from "nexus";

import { MutationResultBase } from "./base";

export type CreateMutationResultBase = MutationResultBase & {};

export const createMutationResultBase = interfaceType({
  name: "CreateMutationResultBase",
  definition(t) {
    t.implements("MutationResultBase");
  },
});
