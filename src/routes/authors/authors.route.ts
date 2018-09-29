import { Request, Response, Router } from 'express';
import authorService from './authors.service';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  authorService
    .create(req.body)
    .then(
      response => res.send({ status: true, data: response }),
      err => res.send({ status: false, message: err.message })
    );
});
export default router;
