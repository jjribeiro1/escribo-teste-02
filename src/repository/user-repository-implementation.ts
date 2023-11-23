import { prisma } from '../database';
import { IUserRepository } from './user-repository-interface';
import { SignUpInput } from '../interfaces/sign-up-input';
import { User } from '../entities/User';

export class UserRepositoryImpl implements IUserRepository {
  private userSelect = {
    id: true,
    nome: true,
    email: true,
    senha: true,
    data_criacao: true,
    data_atualizacao: true,
    ultimo_login: true,
    telefones: true,
  };

  async create(data: SignUpInput): Promise<User> {
    const { email, nome, senha, telefones } = data;

    const newUser = await prisma.user.create({
      data: {
        email,
        nome,
        senha,
        telefones: {
          create: telefones,
        },
      },
      select: this.userSelect,
    });

    return newUser;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { id }, select: this.userSelect });
    return user;
  }
}
