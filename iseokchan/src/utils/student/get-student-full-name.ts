export const getStudentFullName = (
  grade: number,
  room: number,
  number: number,
  name: string
) =>
  grade.toString() +
  room.toString() +
  number.toString().padStart(2, "0") +
  name;
