import { gql } from "graphql-request";

import { useSWR } from "../../base";

import type { IseokType } from "../../../graphql/schema/types";

const IseokApplyMetaQuery = gql`
  {
    iseokTypeList {
      id
      name
      shortName
      color
      approveSteps
      iseokable
      locationRequired
      maximumDuration
      maximumStudentCount
      minimumDuration
      minimumStudentCount
      reasonRequired
      studentRequired
      teacherRequired
      timeOverlapAllowed
      timeSelectOptions
    }
  }
`;

type IseokApplyMetaQueryResult = {
  iseokTypeList: IseokType[];
};

export const useIseokApplyMeta = () =>
  useSWR<IseokApplyMetaQueryResult>(IseokApplyMetaQuery);
