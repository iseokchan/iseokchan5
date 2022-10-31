import { gql } from "graphql-request";

import { Teacher } from "graphql/schema/types";

import { useSWR } from "../base";

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
