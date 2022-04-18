import express, { Express } from 'express';
import dotenv from 'dotenv';
import route from './routes';

class ServerGlobal {
    private static _instance: ServerGlobal;

    private constructor() { 
      let config = null
      if(!config){
        dotenv.config();
        config = process.env
      }

      const app: Express = express();
      const port = config.PORT;

      app.use(route)

      app.listen(port, () => {
        console.info(`⚡️[server]: Server is running at https://localhost:${port}`)
      });
    }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new ServerGlobal();
        return this._instance;
    }
}

export default ServerGlobal;