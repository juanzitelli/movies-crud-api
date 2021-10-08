import { Movie } from "./../types/entities";
import { Document } from "mongoose";

export type MovieDocument = Movie & Document;
