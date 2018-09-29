import { Application } from 'express';
import authorRoutes from './authors/authors.route';
export class Routes {
  public routes(app: Application): void {
    app.use('/author', authorRoutes);
  }
}
