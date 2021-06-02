import { Router } from 'express';
import multer from 'multer';
import CreateUserServer from '../services/CreateUserService';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
import uploadConfig from '../config/upload';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  const userServer = new CreateUserServer();
  const user = await userServer.exporte({
    name,
    email,
    password,
  });
  //@ts-ignore
  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();
    const user = await updateUserAvatar.exporte({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });
    //@ts-ignore
    delete user.password;
    return response.json(user);
  },
);

export default usersRouter;
