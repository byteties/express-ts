import dotenv from 'dotenv';

class ConfigGlobal {
    private static _instance: ConfigGlobal;
    public PORT: string

    private constructor() { 
      dotenv.config();
      const config = process.env
      this.PORT = config.PORT || ""
      return {
        PORT: this.PORT
      }
    }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new ConfigGlobal();
        return this._instance;
    }
}

export default ConfigGlobal;