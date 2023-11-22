import express from 'express';
import cors from 'cors';
import { signUpRoute } from './routes/sign-up';
import { signInRoute } from './routes/sign-in';
import { profileRoute } from './routes/profile';

const port = process.env.PORT || 3000;
const server = express();

server.use(express.json());
server.use(cors());
server.use(signUpRoute)
server.use(signInRoute)
server.use(profileRoute)

server.listen(port, () => console.log(`server is running at port ${port}`));
