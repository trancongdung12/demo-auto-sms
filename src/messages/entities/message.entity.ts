import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('messages')
export class Message {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 20 })
  phoneNumber: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ 
    type: 'enum', 
    enum: ['pending', 'sent', 'failed'],
    default: 'pending' 
  })
  status: 'pending' | 'sent' | 'failed';

  @CreateDateColumn({ name: 'created_at' })
  time: Date;
} 