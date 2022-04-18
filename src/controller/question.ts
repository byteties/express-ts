import { Request, Response } from 'express';
import * as QUESTION from '../asset/question.json'

const getAll = async(req:Request,res:Response) =>{
  const questionList = QUESTION.data
  return res.send(questionList)
}
export default{
  getAll,
}