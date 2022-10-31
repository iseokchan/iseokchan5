import { objectType } from "nexus";

export type IseokType = {
  id: number;
  name: string;
  shortName: string;
  color: string;
  timeSelectOptions: string;
  approveSteps: string;
  minimumDuration: string;
  maximumDuration: string;
  minimumStudentCount: string;
  maximumStudentCount: string;
  studentRequired: boolean;
  teacherRequired: boolean;
  locationRequired: boolean;
  reasonRequired: boolean;
  timeOverlapAllowed: boolean;
  iseokable: boolean;
};

export const IseokType = objectType({
  name: "IseokType",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("shortName");
    t.string("color");
    t.list.string("timeSelectOptions");
    t.int("approveSteps");
    t.int("minimumDuration");
    t.int("maximumDuration");
    t.int("minimumStudentCount");
    t.int("maximumStudentCount");
    t.boolean("studentRequired");
    t.boolean("teacherRequired");
    t.boolean("locationRequired");
    t.boolean("reasonRequired");
    t.boolean("timeOverlapAllowed");
    t.boolean("iseokable");
  },
});
