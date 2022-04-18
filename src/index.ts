import express, { Express } from 'express';
import dotenv from 'dotenv';
import route from './routes' 

let config = null
if(!config){
  dotenv.config();
  config = process.env
}

const app: Express = express();
const port = config.PORT;

app.use(route)

app.listen(port, () => {
  console.info(`⚡️[server]: Server is running at https://localhost:${port}`);
});