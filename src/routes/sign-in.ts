import { Router } from 'express';
import { SignInController } from '../controllers/sign-in/sign-in-controller';
import { AuthServiceImpl } from '../services/authentication/auth-service-implementation';
import { UserRepositoryImpl } from '../repository/user-repository-implementation';
import { CryptographyImpl } from '../services/cryptography/cryptography-implementation';
import { TokenServiceImpl } from '../services/token/token-service-implementation';
import { validateSignInBody } from '../middlewares/validate-sign-in-body';

export const signInRoute = Router();

const userRepository = new UserRepositoryImpl();
const cryptographyService = new CryptographyImpl();
const tokenService = new TokenServiceImpl();
const authService = new AuthServiceImpl(userRepository, cryptographyService, tokenService);
const signInController = new SignInController(authService);

signInRoute.post('/sign-in', validateSignInBody, signInController.handler);
