import express, { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../models/entities/user';

const userRoutes = (userRepository: Repository<User>) => {
  const router = express.Router();

  // Define routes for users
  router.get('/', async (req: Request, res: Response) => {
    try {
      const users = await userRepository.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Add more routes for users as needed

  return router;
};

export default userRoutes;
