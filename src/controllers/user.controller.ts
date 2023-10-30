import { Request, Response } from 'express';
import { getRepository } from 'typeorm'; // Import your Entity Repository here
import { UserService } from '../services/user.service';
import { User } from '../models/entities/user';

const userRepository = getRepository(User); // Replace 'User' with your actual Entity


const userService = new UserService(userRepository); // Pass the userRepository as an argument

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

