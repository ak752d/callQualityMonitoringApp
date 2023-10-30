
import { Repository } from 'typeorm';
import { questionnaires } from '../models/entities/Questionnaires';

export class QuestionnairesService {
  private questionnairesRepository: Repository<questionnaires>;

  constructor(questionnairesRepository: Repository<questionnaires>) {
    this.questionnairesRepository = questionnairesRepository;
  }

  async getAllQuestionnaires() {
    return this.questionnairesRepository.find();
  }


}

export default QuestionnairesService;
