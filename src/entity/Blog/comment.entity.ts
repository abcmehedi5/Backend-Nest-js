// import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// import { ReplyEntity } from './reply.entity';

// @Entity('comments')
// export class CommentEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   blogId: number;

//   @Column()
//   text: string;

//   @Column()
//   name: string;

//   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   date: Date;

//   @Column()
//   email: string;

//   @Column()
//   image: string;

//   @OneToMany(() => ReplyEntity, reply => reply.comment)
//   replies: ReplyEntity[];
// }


// comment.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ReplyEntity } from './reply.entity';

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  blogId: number;

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

  @OneToMany(() => ReplyEntity, reply => reply.comment, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'commentId' })
  replies: ReplyEntity[];
}
