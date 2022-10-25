import { Router } from 'express';
import UserController from '../controller';

const router = Router();

const useController = new UserController();

router.post('/login', useController.getUser);

export default router;
