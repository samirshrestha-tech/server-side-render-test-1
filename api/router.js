import express from "express";
import { addTask } from "./src/models/taskModels/TaskModel.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "still to do",
  });
});

router.post("/", async (req, res) => {
  console.log(req.body);

  //add data to the database

  const result = await addTask(req.body);

  result?._id
    ? res.json({
        status: "success",
        message: "The task has been added",
      })
    : res.json({
        status: "error",
        message: "Unable to add the task, try again later",
      });
});

export default router;
