import express, { Request, Response } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@jhtickets/common';

const app = express();
// for ingress-iginx proxy
app.set('trust proxy', true);

app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);

// using 'express-async-errors'
app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
