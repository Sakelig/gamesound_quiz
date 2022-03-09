import { Router } from "express";

export function quizApi(mongoDB) {
  const router = new Router();

  router.get("/", async (req, res) => {
    const questions = await mongoDB
      .collection("questions")
      .find({})
      .map(({ id, gamename, answers, sound }) => ({
        id,
        gamename,
        answers,
        sound,
      }))
      .toArray();
    res.json(questions);
  });

  return router;
}
