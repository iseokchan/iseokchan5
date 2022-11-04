import { DateTimeResolver } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export const DateTimeScalar = asNexusMethod(DateTimeResolver, "datetime");
