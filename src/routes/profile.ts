import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth-middleware';
import { TokenServiceImpl } from '../services/token/token-service-implementation';
import { ProfileController } from '../controllers/profile/profile-controller';
import { UserRepositoryImpl } from '../repository/user-repository-implementation';

export const profileRoute = Router();
const tokenService = new TokenServiceImpl()
const authMiddleware = new AuthMiddleware(tokenService)
const userRepository = new UserRepositoryImpl()
const profileController = new ProfileController(userRepository)

profileRoute.get('/profile/:id', authMiddleware.handler, profileController.handler);
