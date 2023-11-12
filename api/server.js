import "dotenv/config";

import express from "express";
const app = express();
console.log(app.listen);
const PORT = 8000;
import taskRouter from "./router.js";
import { connectDB } from "./src/config/dbConfig.js";
import cors from "cors";
import morgan from "morgan";
import path from "path";
const _dirname = path.resolve();
// to resolve a path for building static website

app.use(express.static(_dirname + "/build"));
// DB connect
connectDB();
console.log();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.json({
    message: "working",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
