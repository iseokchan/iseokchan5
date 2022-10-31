import { gql } from "graphql-request";

import { useSWR } from "../base";

import type { Student } from "src/graphql/schema/types";

const StudentListQuery = gql`
  {
    studentList {
      id
      name
      fullName
    }
  }
`;

type StudnetListQueryResult = {
  studentList: Student[];
};

export const useStudentList = () =>
  useSWR<StudnetListQueryResult>(StudentListQuery);
