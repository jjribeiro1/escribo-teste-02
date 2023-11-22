import { Router } from 'express';

export const profileRoute = Router();

profileRoute.get('/profile/:id', (req, res) => {
  return res.sendStatus(200);
});
