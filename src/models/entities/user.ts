import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  userId!: number;

  @Column()
  userEmail!: string;

  @Column()
  name!: string;

  @Column()
  contactDepartment: string;

  constructor() {
    super();
    this.contactDepartment = '';
  }
}
