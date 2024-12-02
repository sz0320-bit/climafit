import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ClothingItem {
  @PrimaryGeneratedColumn()
  id!: number; // Non-null assertion for autogenerated fields

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'varchar', length: 255 })
  brand!: string;

  @Column({ type: 'varchar', length: 50 })
  type!: string;

  @Column({ type: 'int' })
  minTemp!: number;

  @Column({ type: 'int' })
  maxTemp!: number;

  @Column({ type: 'varchar', length: 50 })
  color!: string;

  @Column({ type: 'simple-array' })
  suitableWeather!: string[]; // Comma-separated array stored as a string

  @Column({ type: 'varchar', length: 255 })
  imageLink!: string;
}