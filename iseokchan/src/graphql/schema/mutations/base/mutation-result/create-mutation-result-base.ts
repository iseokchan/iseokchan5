import { interfaceType } from "nexus";

import { MutationResultBase } from "./base";

export type CreateMutationResultBase = MutationResultBase & {};

export const CreateMutationResultBaseType = interfaceType({
  name: "CreateMutationResultBase",
  definition(t) {
    t.implements("MutationResultBase");
  },
});
