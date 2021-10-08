import { MovieDocument } from "./../../../../types/models";

import { Schema, model as Model } from "mongoose";
import { Movie } from "../../../../types/entities";

const MovieSchema = new Schema<Movie>({
  name: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
    maxlength: 50,
  },
  director: {
    type: String,
    required: true,
  },
  genres: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  awards: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        year: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
  adults: {
    type: Boolean,
    required: true,
  },
});

export const MovieModel = Model<MovieDocument>("Movie", MovieSchema);
