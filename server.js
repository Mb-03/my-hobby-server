import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());

app.get("/my-hobby", async (req, res) => {
  res.status(200).json("My hobby is programming");
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
