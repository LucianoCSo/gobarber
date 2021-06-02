import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}
export default class CreateUserService {
  public async exporte({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const chackUserExist = await userRepository.findOne({
      where: { email },
    });

    if (chackUserExist) throw new AppError('Email ja cadastrado');

    const hashPassword = await hash(password, 8);
    const user = userRepository.create({
      name,
      email,
      password: hashPassword,
    });
    await userRepository.save(user);
    return user;
  }
}
