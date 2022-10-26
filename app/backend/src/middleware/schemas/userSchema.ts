import * as Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().min(3).messages({
    'any.required': '"username" is required',
  }).required(),

  classe: Joi.string().min(3).messages({
    'string.min': '"classe" length must be at least 3 characters long',
    'any.required': '"classe" is required',
  }).required(),

  level: Joi.number().min(1).messages({
    'number.min': '"level" must be greater than or equal to 1',
    'any.required': '"level" is required',
  }).required(),

  password: Joi.string().messages({
    'any.required': '"password" is required',
    'string.min': '"password" length must be at least 8 characters long',
    'string.base': '"password" must be a string',
  }).min(8).required(),
});

export default userSchema;
