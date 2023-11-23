import { Request, Response } from 'express';
import { IAuthService } from '../../services/authentication/auth-service-interface';
import { SignInInput } from '../../interfaces/sign-in-input';

export class SignInController {
  constructor(private readonly authService: IAuthService) {}

  handler = async (req: Request, res: Response) => {
    try {
      const body: SignInInput = req.body;
      const data = await this.authService.signIn(body);

      return res.status(200).json(data);
    } catch (error) {
      const errorObject = error as Error;
      return res.status(500).json({ mensagem: errorObject.message });
    }
  };
}
