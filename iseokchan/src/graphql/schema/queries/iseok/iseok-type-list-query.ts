import { list, queryField } from "nexus";

export const IseokTypeListQuery = queryField("iseokTypeList", {
  type: list("IseokType"),
  resolve(_, __, ctx) {
    return ctx.prisma.iseokType.findMany({
      where: {
        iseokable: true,
      },
    });
  },
});
