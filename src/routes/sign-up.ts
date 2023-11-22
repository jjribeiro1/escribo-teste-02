import { Router } from 'express';

export const signUpRoute = Router();

signUpRoute.post('/sign-up', (req, res) => {
  return res.sendStatus(201);
});
