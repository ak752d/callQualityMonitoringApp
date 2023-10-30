
import { Repository } from 'typeorm';
import { weightage_Lookup } from '../models/entities/weightage_Lookup';

export class Weightage_lookupService {
  private weightageLookupRepository: Repository<weightage_Lookup>;

  constructor(weightageLookupRepository: Repository<weightage_Lookup>) {
    this.weightageLookupRepository = weightageLookupRepository;
  }

  async getAllWeightageLookup() {
    return this.weightageLookupRepository.find();
  }

}

export default weightage_Lookup;
