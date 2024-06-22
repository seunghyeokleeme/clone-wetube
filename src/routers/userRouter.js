import express from 'express';
import {
  edit,
  logout,
  remove,
  user,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/:id(\\d+)', user);
userRouter.get('/logout', logout);
userRouter.get('/edit', edit);
userRouter.get('/delete', remove);

export default userRouter;
