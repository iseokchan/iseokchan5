import { list, queryField } from "nexus";

export const iseokTypeListQuery = queryField("iseokTypeList", {
  type: list("IseokTypeType"),
  resolve(_, __, ctx) {
    return ctx.prisma.iseokType.findMany({
      where: {
        iseokable: true,
      },
    });
  },
});
