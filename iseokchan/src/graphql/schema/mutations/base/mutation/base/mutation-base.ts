import { interfaceType } from "nexus";

export type MutationBase = {
  sucess: boolean;
};

export const MutationBaseType = interfaceType({
  name: "MutationBase",
  definition(t) {
    t.nonNull.boolean("sucess");
  },
});
