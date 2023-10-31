import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Questionnaires extends BaseEntity {
  @PrimaryGeneratedColumn()
  Questions_id!: number;

  @Column()
  Questions!: string;
}
