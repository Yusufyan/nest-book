import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string
    
    @Column()
    email: string

    @Column()
    password: string

    @Column({ type: 'timestamp', default:() => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'timestamp', default:null })
    updated_at: Date

    @Column({ default: 'T' })
    is_active: boolean

}