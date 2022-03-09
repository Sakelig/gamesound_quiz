import { Router } from "express";

export function quizApi(mongoDB) {
  const router = new Router();

  router.get("/", async (res, req) => {
    const questions = await mongoDB
      .colletion("questions")
      .map(({ id, gamename, answers, sound }) => {
        id, gamename, answers, sound;
      })
      .toArray();
    res.json(questions);
  });

  return router;
}
