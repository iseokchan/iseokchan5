import { interfaceType } from "nexus";

export type MutationErrorBase = {
  _?: string;
};

export const MutationErrorBaseType = interfaceType({
  name: "MutationErrorBase",
  definition(t) {
    t.string("_");
  },
});
