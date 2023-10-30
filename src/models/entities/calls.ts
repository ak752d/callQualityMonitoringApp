import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Calls extends BaseEntity {
  @PrimaryGeneratedColumn()
  call_Id!: number;

  @Column()
  question_Id!: number; // Assuming this is a foreign key to a Question entity

  @Column({ default: () => "CURRENT_TIMESTAMP" }) // Set default to current timestamp
  startTime: Date;

  @Column({ default: () => "CURRENT_TIMESTAMP" }) // Set default to current timestamp
  end_Time: Date;

  @Column({ default: false }) // Set default to false
  is_Answered: boolean;

  @Column({ default: 0 }) // Set default to 0
  rating: number;

  constructor() {
    super();
    this.startTime = new Date(); // Initialize with the current date and time
    this.end_Time = new Date();   // Initialize with the current date and time
    this.is_Answered = false;     // Initialize with a default value
    this.rating = 0;             // Initialize with a default value
  }
}
