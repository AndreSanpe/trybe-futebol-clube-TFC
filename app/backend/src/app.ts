import express from 'express';
import { UserRouter, TeamRouter, MatchRouter, LeaderboardRouter } from './routes';
import errorMiddleware from './middleware/errorMiddleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    // Não remover essa rota
    this.routes();
    this.app.get('/', (req, res) => res.json({ ok: true }));
    this.InitializeErroHandler();
  }

  private InitializeErroHandler() {
    this.app.use(errorMiddleware);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes():void {
    this.app.use(UserRouter, TeamRouter, MatchRouter, LeaderboardRouter);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
