import TaskSchema from "./TaskSchema.js";

// add tasj to db
export const addTask = (obj) => {
  return TaskSchema(obj).save();
};
