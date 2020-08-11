import { Request, Response } from 'express';
import db from '../database/';

class UsersController {

  async index(request: Request, response: Response) {
    const totalUsers = await db('users').count('* as total');
    const { total } = totalUsers[0];
    return response.json({ total })
  }

  async create(request: Request, response: Response) {
    const { first_name, last_name, password, email, } = request.body;

    await db('users').insert({
      first_name,
      last_name,
      password,
      email
    });

    return response.status(201).send();
  }
}

export default new UsersController()