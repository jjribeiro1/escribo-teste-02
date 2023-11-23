import { Request, Response, NextFunction } from 'express';
import * as z from 'zod';

const signUpSchema = z.object({
  nome: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Insira um email válido' }),
  senha: z.string().min(6, { message: 'A senha é obrigatória e requer pelo menos 6 caracteres' }),
  telefones: z.array(
    z.object({
      numero: z.string().min(1, { message: 'Número de telefone é obrigatório' }),
      ddd: z.string().min(1, { message: 'DDD do número de telefone é obrigatório' }),
    })
  ),
});

export function validateSignUpBody(req: Request, res: Response, next: NextFunction) {
  const body: z.infer<typeof signUpSchema> = req.body;
  const { email, nome, senha, telefones } = body;

  const inputValidation = signUpSchema.safeParse({ email, senha, nome, telefones });
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
