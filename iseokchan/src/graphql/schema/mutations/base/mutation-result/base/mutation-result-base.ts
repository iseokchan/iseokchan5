import { interfaceType } from "nexus";

export type MutationResultBase = {};

export const mutationResultBase = interfaceType({
  name: "MutationResultBase",
  definition(t) {
    t.string("_");
  },
});
