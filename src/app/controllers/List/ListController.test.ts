import { Request, Response } from 'express';
import fs from 'fs';
import ListController from "./ListController";

describe('List Controller', () => {
  test('Get list soccer', async () => {
    const list: any = fs.readFileSync('./src/app/utils/arquivo.json');

    const request = {} as Request;
    const response = {
      json: () => {
        return JSON.parse(list);
      }
    } as unknown as Response;

    const getList = await ListController.get(request, response);

    expect(getList).toEqual(expect.arrayContaining([expect.objectContaining({
      id: expect.anything(),
      nome: expect.anything(),
      type: expect.anything()
    })]))
  });

  test('Create list soccer', async () => {
    const request = {
      body: {
        list: [
          {
            id: 1,
            nome: 'Diego',
            type: 'Mensal'
          }
        ]
      }
    } as Request;
    const response = {
      json: () => {
        return 'O arquivo foi criado!'
      }
    } as unknown as Response;

    const createList = await ListController.create(request, response);

    expect(createList).toBe('O arquivo foi criado!');
  });
});
