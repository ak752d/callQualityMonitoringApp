
import { Repository, DeepPartial, SelectQueryBuilder, ObjectLiteral } from 'typeorm';

export class DefaultCrudService<T extends ObjectLiteral> {
  constructor(private repository: Repository<T>) {}

  async find(filter?: any): Promise<T[]> {
    return this.repository.find(filter);
  }


}
