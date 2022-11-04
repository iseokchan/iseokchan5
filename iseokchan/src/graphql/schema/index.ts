import { makeSchema } from "nexus";

import { join } from "path";

import * as mutations from "./mutations";
import * as queries from "./queries";
import * as types from "./types";

export const schema = makeSchema({
  types: {
    ...types,
    ...queries,
    ...mutations,
  },
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts"
    ),
    schema: join(process.cwd(), "src", "graphql", "schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "src", "graphql", "context.ts"),
  },
  features: {
    abstractTypeStrategies: {
      resolveType: false,
    },
  },
  shouldExitAfterGenerateArtifacts: process.argv.includes("--nexusTypegen"),
});
