import { Router } from "express";
import { MoviesRoutes } from "./../types/routes";
import {
  createMovie,
  removeMovie,
  getMovies,
  getMovieById,
  updateMovie,
} from "./../controllers/movie";
import {
  movieIdParamValidationMiddleware,
  movieValidationMiddleware,
} from "./../middlewares/validation";

export const movieRouter: Router = Router();

movieRouter.get(MoviesRoutes.Get, getMovies);
movieRouter.get(
  MoviesRoutes.GetById,
  movieIdParamValidationMiddleware,
  getMovieById
);
movieRouter.post(MoviesRoutes.Create, movieValidationMiddleware, createMovie);
movieRouter.put(
  MoviesRoutes.Update,
  movieIdParamValidationMiddleware,
  movieValidationMiddleware,
  updateMovie
);
movieRouter.delete(
  MoviesRoutes.Remove,
  movieIdParamValidationMiddleware,
  removeMovie
);
