import { interfaceType } from "nexus";

import { MutationBase } from "./base/mutation-base";

export type CreateMutation = MutationBase & {
  id?: number;
};

export const createMutationBase = interfaceType({
  name: "CreateMutationBase",
  definition(t) {
    t.implements("MutationBase");
    t.int("id");
  },
});
