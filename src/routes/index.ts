import express,{ Request, Response } from 'express'
import questionController from '../controller/question'
import answerController from '../controller/answer'
import { SUCCESS_STATUS } from '../constants'

const route = express()

route.get('/answer/:id',answerController.get)

route.get('/questions',questionController.getAll)

route.get('/healthz', (req:Request, res:Response) => {
  res.send('OK')
})

route.get('/', (req:Request, res:Response)  => {
    res.status(SUCCESS_STATUS).send('hello world');
});

export default route