import express, { Router } from 'express';
import { Repository } from 'typeorm';
import { Calls } from '../models/entities/calls';

const callsRoutes = (callRepository: Repository<Calls>): Router => {
  const router = express.Router();

  // Define routes for calls
  router.get('/getAllCalls', async (req, res) => {
    try {
      const calls = await callRepository.find();
      res.json(calls);
    } catch (error) {
      console.error('Error fetching calls:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Add more routes for calls as needed

  return router;
};

export default callsRoutes;
