import { Request, Response } from 'express';
import { IUserRepository } from '../../repository/user-repository-interface';
import { formatDateUTC } from '../../utils/format-date-utc';

export class ProfileController {
  constructor(private readonly userRepository: IUserRepository) {}

  handler = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const user = await this.userRepository.findById(id);

      if (!user) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
      const data = {
        id: user.id,
        nome: user.nome,
        email: user.email,
        telefones: user.telefones,
        ultimo_login: formatDateUTC(user.ultimo_login as Date),
        data_atualizacao: formatDateUTC(user.data_atualizacao),
        data_criacao: formatDateUTC(user.data_criacao),
      };

      return res.status(200).json(data);
    } catch (error) {
      const errorObject = error as Error;
      return res.status(500).json({ mensagem: errorObject.message });
    }
  };
}
