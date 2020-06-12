import express, { response } from 'express';
import { currentUser } from '../middlewares/current-user';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  // // if (!req.session || !req.session.jwt) {
  // // same as above in typescript
  // if (!req.session?.jwt) {
  //   return res.send({ currentUser: null });
  // }

  // try {
  //   const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
  //   res.send({ currentUser: payload });
  // } catch {
  //   res.send({ currentUser: null });
  // }
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
