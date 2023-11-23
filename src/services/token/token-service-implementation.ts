import jwt from 'jsonwebtoken';
import { ITokenService } from './token-service-interface';

const jwtSecret = process.env.JWT_SECRET as string;

export class TokenServiceImpl implements ITokenService {
  generateToken(userId: string): string {
    const token = jwt.sign({ id: userId }, jwtSecret, { expiresIn: 60 * 30 });
    return token;
  }
}
