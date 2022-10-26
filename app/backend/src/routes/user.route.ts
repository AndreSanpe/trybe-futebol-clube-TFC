import { Router } from 'express';
import loginMid from '../middleware/loginMid';
import { UserController, ValidateController } from '../controller';

const router = Router();

const useController = new UserController();
const validateController = new ValidateController();

router.post('/login', loginMid, useController.getUser);

router.get('/login/validate', validateController.validateUser);

export default router;
