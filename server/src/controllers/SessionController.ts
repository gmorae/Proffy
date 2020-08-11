import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import authConfig from '../config/auth';

import db from '../database';

class SessionController {
  
  public async store(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await db('users').where({ email }).first();

    if (!user || password !== user.password) {
      return response.status(401).send({ message: "Email ou senha incorretos" })
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ user }, String(secret), {
      subject: String(user.id),
      expiresIn,
    });

    return response.status(200).json({ token })
  }

}

export default new SessionController();