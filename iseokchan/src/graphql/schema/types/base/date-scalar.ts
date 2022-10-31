import { formatISO, parseISO } from "date-fns";
import { Kind } from "graphql/language/kinds";
import { scalarType } from "nexus";

import type { ValueNode } from "graphql";

export type DateScalar = Date;

export const DateScalar = scalarType({
  name: "DateTime",
  asNexusMethod: "datetime",
  description: "DateTime custom scalar type",
  parseValue(value) {
    return parseISO(value as string);
  },
  serialize(value) {
    return formatISO(value as Date);
  },
  parseLiteral(ast: ValueNode) {
    if (ast.kind == Kind.STRING) {
      return parseISO(ast.value);
    }

    return null;
  },
});
