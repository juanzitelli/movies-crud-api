import Joi from "joi";

export const MovieValidationSchema = Joi.object({
  movie: Joi.object({
    name: Joi.string().required(),
    overview: Joi.string().max(140).required(),
    release_date: Joi.date().required(),
    director: Joi.string().required(),
    genres: Joi.array().items(Joi.string().required()),
    adults: Joi.boolean().required(),
  }).required(),
});

export const MovieIdParamValidationSchema = Joi.object({
  id: Joi.string().required().length(24).hex(),
});
