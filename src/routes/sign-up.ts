import { Router } from 'express';
import { SignUpController } from '../controllers/sign-up/sign-up-controller';
import { SignUpServiceImpl } from '../services/sign-up/sign-up-implementation';
import { UserRepositoryImpl } from '../repository/user-repository-implementation';
import { CryptographyImpl } from '../services/cryptography/cryptography-implementation';
import { TokenServiceImpl } from '../services/token/token-service-implementation';

export const signUpRoute = Router();

const userRepository = new UserRepositoryImpl();
const cryptographyService = new CryptographyImpl();
const tokenService = new TokenServiceImpl();
const signUpService = new SignUpServiceImpl(userRepository, cryptographyService, tokenService);
const signUpController = new SignUpController(signUpService);

signUpRoute.post('/sign-up', signUpController.handler);
