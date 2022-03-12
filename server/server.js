import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { quizApi } from "./quizApi.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
  console.log("connected to mongoDB");
  app.use(
    "/api/questions",
    quizApi(mongoClient.db(process.env.MONGODB_DATABASENAME))
  );
});

app.get("/api/fullscore", async (req, res) => {
  res.json(process.env.REWARD);
});

app.use(express.static("../client/dist"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`started on http://localhost:${server.address().port}`);
});
