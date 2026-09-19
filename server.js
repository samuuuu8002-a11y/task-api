const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const taskRoutes = require("./routes/taskRoutes");

app.use("/tasks", taskRoutes);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});