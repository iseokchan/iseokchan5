import { gql } from "graphql-request";

import { useSWR } from "../base";

import type { IseokType } from "../../graphql/schema/types";

const IseokTypeListQuery = gql`
  {
    iseokTypeList {
      id
      name
    }
  }
`;

type IseokTypeListQueryResult = {
  iseokTypeList: Pick<IseokType, "id" | "name">[];
};

export const useIseokTypeList = () =>
  useSWR<IseokTypeListQueryResult>(IseokTypeListQuery);
