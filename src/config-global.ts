import dotenv from 'dotenv';
import { PORT } from './constants'

class ConfigGlobal {
    private static _instance: ConfigGlobal;
    private static config: NodeJS.ProcessEnv | undefined;
    private static port: string | undefined;


    private constructor() { }

    static getInstance() {
      if (this._instance) {
          return this._instance;
      }

      dotenv.config();
      const config = process.env
      this.port = config.PORT || PORT

      this._instance = new ConfigGlobal();
      return this._instance;
    }

    public getPort(){
      return PORT
    }
}

export default ConfigGlobal;