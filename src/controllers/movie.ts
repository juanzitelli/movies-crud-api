import { RequestHandler } from "express";
import { ErrorResponse, SuccessResponse } from "./../types/controllers";
import { MovieDocument } from "./../types/models";
import * as db from "./../data/db/mongodb/resolvers/movies";

export const getMovies: RequestHandler = async (_, res) => {
  try {
    const movies: MovieDocument[] = await db.getMovies();

    const successResponse: SuccessResponse<MovieDocument> = {
      status: "ok",
      payload: { list: movies },
    };

    return res.status(200).json(successResponse);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      status: "error",
      msg: `An error occurred: ${error}`,
    };

    return res.status(400).json(errorResponse);
  }
};

export const getMovieById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await db.getMovieById({ id });

    if (movie) {
      const successResponse: SuccessResponse<MovieDocument> = {
        status: "ok",
        payload: {
          item: movie,
        },
      };

      return res.status(200).json(successResponse);
    }

    throw new Error(`No found item with the id: ${id}`);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      status: "error",
      msg: `An error occurred: ${error}`,
    };

    return res.status(400).json(errorResponse);
  }
};

export const createMovie: RequestHandler = async (req, res) => {
  try {
    const { movie } = req.body;

    const createdMovie = await db.createMovie({ movie });

    const successResponse: SuccessResponse<MovieDocument> = {
      status: "ok",
      payload: {
        item: createdMovie,
      },
    };

    return res.status(200).json(successResponse);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      status: "error",
      msg: `An error occurred: ${error}`,
    };

    return res.status(400).json(errorResponse);
  }
};

export const updateMovie: RequestHandler = async (req, res) => {
  try {
    const { movie } = req.body;
    const { id } = req.params;

    const updatedMovie = await db.updateMovie({ id, movie });

    if (updatedMovie) {
      const successResponse: SuccessResponse<any> = {
        status: "ok",
        payload: {
          item: { _id: updatedMovie._id, ...movie },
        },
      };

      return res.status(200).json(successResponse);
    }

    throw new Error(`No found item with the id: ${id}`);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      status: "error",
      msg: `An error occurred: ${error}`,
    };

    return res.status(400).json(errorResponse);
  }
};

export const removeMovie: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const removedMovie = await db.removeMovie({ id });

    if (removedMovie) {
      const successResponse: SuccessResponse<any> = {
        status: "ok",
        payload: {
          item: removedMovie,
        },
      };

      return res.status(200).json(successResponse);
    }

    throw new Error(`No found item with the id: ${id}`);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      status: "error",
      msg: `An error occurred: ${error}`,
    };

    return res.status(400).json(errorResponse);
  }
};
