
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class questionnaires extends BaseEntity {
  @PrimaryGeneratedColumn()
  questionnaire_Id!: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  createdDate: Date;

  @Column({ default: false })
  isPublished: boolean;

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.createdDate = new Date();
    this.isPublished = false;
  }
}




