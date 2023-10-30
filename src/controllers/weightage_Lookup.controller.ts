
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Weightage_lookupService } from '../services/weightage_LookupService';
import { weightage_Lookup } from '../models/entities/weightage_Lookup';

const weightageLookupRepository = getRepository(weightage_Lookup);

const weightageLookupService = new Weightage_lookupService(weightageLookupRepository);

export async function getAllWeightageLookup(req: Request, res: Response) {
  try {
    const weightageLookup = await weightageLookupService.getAllWeightageLookup();
    res.status(200).json(weightageLookup);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

