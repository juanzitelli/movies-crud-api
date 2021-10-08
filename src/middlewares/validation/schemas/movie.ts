import Joi from "joi";

export const MovieValidationSchema = Joi.object({
  movie: Joi.object({
    name: Joi.string().required(),
    overview: Joi.string().max(140).required(),
    release_date: Joi.date().required(),
    director: Joi.string().required(),
    genres: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
      }).required()
    ),
    awards: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        year: Joi.number().required(),
      }).required()
    ),
    adults: Joi.boolean().required(),
  }).required(),
});

export const MovieIdParamValidationSchema = Joi.object({
  id: Joi.string().required().length(24).hex(),
});
