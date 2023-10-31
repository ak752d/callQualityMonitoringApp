
import { Repository } from 'typeorm';
import { Questionnaires } from '../models/entities/Questionnaires';

export class QuestionnairesService {
  private questionnairesRepository: Repository<Questionnaires>;

  constructor(questionnairesRepository: Repository<Questionnaires>) {
    this.questionnairesRepository = questionnairesRepository;
  }

  async getAllQuestionnaires() {
    return this.questionnairesRepository.find();
  }


}

export default QuestionnairesService;
