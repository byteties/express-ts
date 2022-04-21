import { Request, Response } from 'express';
import fs from 'fs';
import * as path from "path";
import { SERVER_ERROR } from '../constants';

const getAll = (req:Request,res:Response) =>{
  const filePath = path.resolve(__dirname, '../asset/question.json')
  fs.readFile(filePath, (err, data:Buffer) => {
    if(err){
      return res.send('Something went wrong').status(SERVER_ERROR)
    } else {
      const convertToString = data.toString()
      const questionList = JSON.parse(convertToString);
      return res.send(questionList.data)
    }
  })
}
export default{
  getAll,
}