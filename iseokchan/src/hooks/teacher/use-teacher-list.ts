import { gql } from "graphql-request";

import { useSWR } from "../base";

import type { Teacher } from "src/graphql/schema/types";

const TeacherListQuery = gql`
  {
    teacherList {
      id
      name
    }
  }
`;

type StudnetListQueryResult = {
  teacherList: Teacher[];
};

export const useTeacherList = () =>
  useSWR<StudnetListQueryResult>(TeacherListQuery);
