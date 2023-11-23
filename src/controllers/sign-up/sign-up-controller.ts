import { Request, Response } from 'express';

import { SignUpInput } from '../../interfaces/sign-up-input';
import { ISignUpService } from '../../services/sign-up/sign-up-interface';

export class SignUpController {
  constructor(private readonly signUpService: ISignUpService) {}

  handler = async (req: Request, res: Response) => {
    try {
      const body: SignUpInput = req.body;
      const data = await this.signUpService.execute(body);

      return res.status(201).json(data);
    } catch (error) {
      const errorObject = error as Error;
      return res.status(500).json({ mensagem: errorObject.message });
    }
  };
}
