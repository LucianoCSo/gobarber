import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';
import Auth from '../config/auth';
import AppError from '../errors/AppError';
interface Request {
  email: string;
  password: string;
}
interface Response {
  user: User;
  token: string;
}
class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({
      where: { email },
    });
    if (!user) throw new AppError('Emeil/Password incorreto', 401);

    const pesswordMatched = await compare(password, user.password);

    if (!pesswordMatched) throw new AppError('Emeil/Password incorreto', 401);
    const { secret, expiresIn } = Auth.jwt;
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expiresIn,
    });
    return { user, token };
  }
}
export default AuthenticateUserService;
