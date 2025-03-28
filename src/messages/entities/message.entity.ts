import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20 })
  sender: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ 
    type: 'enum', 
    enum: ['pending', 'sent', 'failed'],
    default: 'pending' 
  })
  status: 'pending' | 'sent' | 'failed';

  @Column({ type: 'bigint' })
  time: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
} 