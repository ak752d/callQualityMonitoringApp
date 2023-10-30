
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { QuestionnairesService } from '../services/QuestionnairesService';
import { questionnaires } from '../models/entities/Questionnaires';

const questionnairesRepository = getRepository(questionnaires);

const questionnairesService = new QuestionnairesService(questionnairesRepository);

export async function getAllQuestionnaires(req: Request, res: Response) {
  try {
    const questionnaires = await questionnairesService.getAllQuestionnaires();
    res.status(200).json(questionnaires);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
