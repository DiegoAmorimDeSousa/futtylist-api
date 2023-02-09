import { Request, Response } from 'express';
import fs from 'fs';

class GetListController {
  async get(request: Request, response: Response) {
    const list: any = fs.readFileSync('./src/app/utils/arquivo.json');

    return response.json(JSON.parse(list));
  }

  async create(request: Request, response: Response) {
    const { list } = request.body;

    fs.writeFile('./src/app/utils/arquivo.json', JSON.stringify(list), (err) => {
      if (err) throw err;
    });

    return response.json('O arquivo foi criado!');
  }
}

export default new GetListController();
