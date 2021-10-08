import { Movie } from "./../../../../types/entities";
import { MovieModel } from "./../models/";

type MovieWithoutId = Omit<Movie, "id">;

export const getMovies = async () => {
  return await MovieModel.find({});
};

export const createMovie = async ({ movie }: { movie: MovieWithoutId }) => {
  const addedMovie = new MovieModel({ ...movie });
  return await addedMovie.save();
};

export const getMovieById = async ({ id }: { id: string }) => {
  return MovieModel.findById(id);
};

export const updateMovie = async ({
  id,
  movie,
}: {
  movie: MovieWithoutId;
  id: string;
}) => {
  return MovieModel.findByIdAndUpdate(id, movie);
};

export const removeMovie = async ({ id }: { id: string }) => {
  return MovieModel.findByIdAndDelete(id);
};
