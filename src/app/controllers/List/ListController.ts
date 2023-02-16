import { Request, Response } from 'express';
import fs from 'fs';

class ListController {
  async get(request: Request, response: Response) {
    const list: any = fs.readFileSync('./src/app/utils/arquivo.json');

    return response.json(JSON.parse(list));
  }

  async create(request: Request, response: Response) {
    try {
      const { list } = request.body;
  
      fs.writeFile('./src/app/utils/arquivo.json', JSON.stringify(list), (err) => {
        if (err) throw err;
      });
  
      return response.json('O arquivo foi criado!');
    } catch (error) {
      console.log('ERROR', error);
    }
  }
}

export default new ListController();
