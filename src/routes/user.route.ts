import express, { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../models/entities/user';

const userRoutes = (userRepository: Repository<User>) => {
  const router = express.Router();

  // GET: Fetch all users
  router.get('/getAllUsers', async (req, res) => {
    try {
      const users = await userRepository.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};

export default userRoutes;
