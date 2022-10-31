import { gql } from "graphql-request";

import { Student } from "graphql/schema/types";

import { useSWR } from "../base";

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
