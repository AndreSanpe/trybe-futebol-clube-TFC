import { Router } from 'express';
import loginMid from '../middleware/loginMid';
import { UserController } from '../controller';

const router = Router();

const useController = new UserController();

router.post('/login', loginMid, useController.getUser);

// router.get('/login/validate', ValidateController.getUser);

export default router;
