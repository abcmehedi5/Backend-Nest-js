import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  displayName: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column()
  email: string;

  @Column()
  image: string;


  @Column()
  phoneNumber: string;

  @Column()
  role: string;

  @Column()
  status: string;

  @Column()
  bio: string;

  @Column()
  birthday: string;

  @Column()
  gender: string;

}
