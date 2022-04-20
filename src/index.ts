import ConfigGlobal from "./config-global";
import express, { Express } from 'express';
import route from './routes';
import { ERROR_ALREADY_PORT_MSG } from './constants'

const appHandlePortFull = (app:Express,port:string):void =>{
  app.listen(port, () => {
    console.info(`⚡️[server]: Server is running at https://localhost:${port}`)
  }).on('error', (e) => {
    const errorMessage = e.message
    console.info('Error : ', errorMessage)

    if(errorMessage.includes(ERROR_ALREADY_PORT_MSG)){
      const newPort = Number(port) + 1
      appHandlePortFull(app,`${newPort}`)
    }
  });
}

const config = ConfigGlobal.getInstance()

const app: Express = express();
const port = config.PORT;

app.use(route)

appHandlePortFull(app,port)