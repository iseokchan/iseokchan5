import { interfaceType } from "nexus";

export type MutationResultBase = { _?: string };

export const MutationResultBaseType = interfaceType({
  name: "MutationResultBase",
  definition(t) {
    t.string("_");
  },
});
