import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import Auth from '../config/auth';
import AppError from '../errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError('JWT token is missing', 401);

  const [, token] = authHeader.split(' ');
  try {
    const decode = verify(token, Auth.jwt.secret);

    const { sub } = decode as TokenPayload;
    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('JWT erro token', 401);
  }
}
