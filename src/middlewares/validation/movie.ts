import { createValidator } from "express-joi-validation";
import { MovieIdParamValidationSchema, MovieValidationSchema } from "./schemas";
const movieValidationMiddlewareCreator = createValidator();

export const movieValidationMiddleware = movieValidationMiddlewareCreator.body(
  MovieValidationSchema
);

export const movieIdParamValidationMiddleware =
  movieValidationMiddlewareCreator.params(MovieIdParamValidationSchema);
