import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('books')
export class BookEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    no_id: string
    
    @Column()
    title: string

    @Column()
    author: string

    @Column({ type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    created_at: Date

    @Column({ type: 'timestamp', default:null})
    updated_at: Date

    @Column({ default: 'F' })
    is_deleted: boolean
}