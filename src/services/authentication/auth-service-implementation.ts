import { IAuthService } from './auth-service-interface';
import { SignInInput } from '../../interfaces/sign-in-input';
import { SignInOutput } from '../../interfaces/sign-in-output';
import { IUserRepository } from '../../repository/user-repository-interface';
import { ICryptographyService } from '../cryptography/cryptography-interface';
import { ITokenService } from '../token/token-service-interface';

export class AuthServiceImpl implements IAuthService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly cryptography: ICryptographyService,
    private readonly tokenService: ITokenService
  ) {}

  async signIn(data: SignInInput): Promise<SignInOutput> {
    const { email, senha } = data;
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Usuário e/ou senha inválidos');
    }

    const passwordIsValid = await this.cryptography.hasherCompare(senha, user.senha);

    if (!passwordIsValid) {
      throw new Error('Usuário e/ou senha inválidos');
    }

    const token = this.tokenService.generateToken(user.id);

    return {
      id: user.id,
      data_criacao: user.data_criacao,
      data_atualizacao: user.data_atualizacao,
      ultimo_login: new Date(),
      token,
    };
  }
}
