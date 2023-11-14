import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CommentEntity } from './comment.entity';

@Entity('replies')
export class ReplyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column()
  email: string;

  @Column()
  image: string;

  @ManyToOne(() => CommentEntity, comment => comment.replies)
  comment: CommentEntity;
}
