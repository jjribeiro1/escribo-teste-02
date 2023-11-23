import { Request, Response, NextFunction } from 'express';
import { ITokenService } from '../services/token/token-service-interface';

export class AuthMiddleware {
  constructor(private readonly tokenService: ITokenService) {}

  handler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(401).send({ mensagem: 'Não autorizado' });
      }

      const parts = authHeader.split(' ');

      if (parts.length !== 2) {
        return res.status(401).send({ mensagem: 'Não autorizado' });
      }

      const [scheme, token] = parts;

      if (scheme !== 'Bearer') {
        return res.status(401).send({ mensagem: 'Não autorizado' });
      }

      if (!token) {
        return res.status(401).json({ mensagem: 'Não autorizado' });
      }

      const decoded = this.tokenService.verifyToken(token);
      req.userId = decoded.id;
      next();
    } catch (error) {
      const errorObject = error as Error;
      if (errorObject.message === 'jwt expired') {
        return res.status(401).json({ mensagem: 'Sessão expirada' });
      }
      return res.status(401).json({ mensagem: 'Não autorizado' });
    }
  };
}
