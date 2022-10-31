import { interfaceType } from "nexus";

export type MutationErrorBase = {
  _?: string;
};

export const mutationErrorBase = interfaceType({
  name: "MutationErrorBase",
  definition(t) {
    t.string("_");
  },
});
