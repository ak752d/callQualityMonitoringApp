
import { Request, Response } from 'express';
import { getRepository } from 'typeorm'; 
import { CallsService } from '../services/calls.service'; 
import { Calls } from '../models/entities/calls';

const callsRepository = getRepository(Calls); 

const callsService = new CallsService(callsRepository); 

export async function getAllCalls(req: Request, res: Response) {
  try {
    const calls = await callsService.getAllCalls(); 
    res.status(200).json(calls);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

