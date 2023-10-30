
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class weightage_Lookup extends BaseEntity {

  @PrimaryColumn()
  Rating!: string;

  @Column()
  Sentiment!: string;
}
