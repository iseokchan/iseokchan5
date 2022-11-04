import { interfaceType } from "nexus";

import { MutationBase } from "./base/mutation-base";

export type CreateMutationBase = MutationBase & {
  id?: number;
};

export const CreateMutationBaseType = interfaceType({
  name: "CreateMutationBase",
  definition(t) {
    t.implements("MutationBase");
    t.int("id");
  },
});
