import dotenv from 'dotenv';
import { PORT } from './constants'

class ConfigGlobal {
    private static config: NodeJS.ProcessEnv | undefined;
    private static port: string | undefined;


    private constructor() { }

    static getPort(){
      if(this.port){
        return this.port
      }
      dotenv.config();
      this.config = process.env
      this.port = this.config.PORT || PORT
      return this.port
    }
}

export default ConfigGlobal;