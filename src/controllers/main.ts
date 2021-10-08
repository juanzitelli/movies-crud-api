import { RequestHandler } from "express";

export const getRoot: RequestHandler = (req, res) => {
  res.json({
    msg: "Hello from the main router!",
  });
};
