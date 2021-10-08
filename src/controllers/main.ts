import { RequestHandler } from "express";

export const getRoot: RequestHandler = (req, res) => {
  res.json({
    msg: "Hey pal, nice to see ya' 🤠",
    server: "ok 👍🏻",
  });
};
