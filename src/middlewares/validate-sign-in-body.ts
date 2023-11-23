import { Request, Response, NextFunction } from 'express';
import * as z from 'zod';

const signInSchema = z.object({
  email: z.string().email({ message: 'Insira um email válido' }),
  senha: z.string().min(6, { message: 'A senha é obrigatória e requer pelo menos 6 caracteres' }),
});

export function validateSignInBody(req: Request, res: Response, next: NextFunction) {
  const body: z.infer<typeof signInSchema> = req.body;
  const { email, senha } = body;

  const inputValidation = signInSchema.safeParse({ email, senha });
  if (!inputValidation.success) {
    return res.status(400).json({
      erros: inputValidation.error.issues.map((value) => ({
        propriedade: value.path[0],
        mensagem: value.message,
      })),
    });
  }

  next();
}
