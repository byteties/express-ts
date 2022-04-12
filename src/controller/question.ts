import { Request, Response } from 'express';

const getAll = async(req:Request,res:Response) =>{
  const questionList = ['Where is my Dog','Where id my Flower','Where is my Love']
  return res.send(questionList)
}
export default{
  getAll,
}