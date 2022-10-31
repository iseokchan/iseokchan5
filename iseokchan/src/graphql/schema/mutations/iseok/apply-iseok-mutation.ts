import { inputObjectType, mutationField, objectType } from "nexus";

import { DateScalar } from "../../types/base";
import { CreateMutation, CreateMutationErrorBase } from "../base";
import { CreateMutationResultBase } from "../base/mutation-result";

export type applyIseokInput = {
  id: number;
  studentIdList: number[];
  teacherId?: number;
  location?: string;
  reason?: string;
  startTime?: DateScalar;
  endTime?: DateScalar;
};

export const applyIseokInputType = inputObjectType({
  name: "ApplyIseokInputType",
  definition(t) {
    t.nonNull.int("iseokTypeId");
    t.nonNull.list.int("studentIdList");
    t.int("teacherId");
    t.string("location");
    t.string("reason");
    t.datetime("startTime");
    t.datetime("endTime");
  },
});

type applyIseokError = CreateMutationErrorBase & {
  [key in keyof applyIseokInput]?: string;
};

export const applyIseokErrorType = objectType({
  name: "ApplyIseokErrorType",
  definition(t) {
    t.implements("CreateMutationErrorBase");
    t.string("iseokTypeId");
    t.list.string("studentIdList");
    t.string("teacherId");
    t.string("location");
    t.string("reason");
    t.datetime("startTime");
    t.datetime("endTime");
  },
});

type applyIseokResult = CreateMutationResultBase & {
  iseokId: number;
};

export const applyIseokResultType = objectType({
  name: "ApplyIseokResultType",
  definition(t) {
    t.implements("CreateMutationResultBase");
    t.nonNull.int("iseokId");
  },
});

export type applyIseok = CreateMutation & {
  errors?: applyIseokError;
  result?: applyIseokResult;
};

export const applyIseokType = objectType({
  name: "ApplyIseokType",
  definition(t) {
    t.implements("CreateMutationBase");
    t.field("errors", {
      type: "ApplyIseokErrorType",
    });
    t.field("result", {
      type: "ApplyIseokResultType",
    });
  },
});

export const applyIseokMutation = mutationField("applyIseok", {
  type: "ApplyIseokType",
  args: { data: applyIseokInputType },
  resolve: async (_, { data }, ctx) => {
    if (!data) {
      throw new Error("Invalid Data Given");
    }
    const iseok = await ctx.prisma.iseok.create({
      data: {
        iseokType: {
          connect: {
            id: data.iseokTypeId,
          },
        },
        teacher: {
          connect: {
            id: data.teacherId!,
          },
        },
        iseokStudentRelation: {
          create: data.studentIdList!.map((studentId) => ({
            studentId: studentId,
          })) as [{ studentId: number }],
        },
        location: data.location,
        reason: data.reason,
        startTime: data.startTime,
        endTime: data.endTime,
      },
    });

    return {
      sucess: true,
      result: null,
      errors: {
        location: "ewfwe",
      },
    };
  },
});
