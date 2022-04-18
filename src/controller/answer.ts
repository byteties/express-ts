import { Request, Response } from 'express';
import * as ANSWER from '../asset/answer.json'

const get = async(req:Request,res:Response) =>{
  const { params } = req
  const { id } = params
  const index = Number(id)
  const answerList = ANSWER.data

  const answer = answerList[index]
  if(!answer) return res.send('Not Found').status(404)
  return res.send(answerList[index])
}
export default{
  get,
}