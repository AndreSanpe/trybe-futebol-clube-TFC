import Joi from 'joi';

const errorMessage = 'All fields must be filled';

const login = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': errorMessage,
    'string.email': 'Incorrect email or password',
    'string.empty': errorMessage,
  }),
  password: Joi.string().required().messages({
    'any.required': errorMessage,
    'string.email': 'Incorrect email or password',
    'string.empty': errorMessage,
  }),
});

export default login;
