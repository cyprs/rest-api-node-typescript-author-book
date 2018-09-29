import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';
import { Routes } from './routes/';
dotenv.config();

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(require('express-status-monitor')());
  }

  private mongoSetup(): void {
    mongoose.connect(
      process.env.MONGODB_STR,
      { useNewUrlParser: true }
    );
  }
}

export default new App().app;
