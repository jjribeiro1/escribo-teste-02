import { Router } from 'express';

export const signInRoute = Router();

signInRoute.post('/sign-in', (req, res) => {
  return res.sendStatus(200);
});
