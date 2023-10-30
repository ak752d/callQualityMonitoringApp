
import { Repository } from 'typeorm';
import { Calls } from '../models/entities/calls';

export class CallsService {
  private callRepository: Repository<Calls>;

  constructor(callRepository: Repository<Calls>) {
    this.callRepository = callRepository;
  }

  async getAllCalls() {
    return this.callRepository.find();
  }

  // You can add more methods here for creating, updating, or deleting calls as needed
}

export default CallsService;
