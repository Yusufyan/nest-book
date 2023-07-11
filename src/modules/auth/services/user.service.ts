import { Injectable, Body, Param } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '../models/user.entity'
import { Repository } from 'typeorm'
import { User } from '../models/user.interface'
import { CreateUserDto } from '../dtos/create-user.dto'
import { Exception } from 'src/utils/custom-exception'
import { hashPassword } from 'src/utils/util'
import { UpdateUserDto } from '../dtos/update-user.dto'


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async createUser(@Body() body: CreateUserDto): Promise<User>{
        const existEmail = await this.userRepository.findOne({ where: {email: body.email} })
        if (existEmail) throw new Exception (`Email already exists`, 400)

        const hashedPassword = await hashPassword(body.password)

        const result: User = await this.userRepository.save({
            username: body.username,
            password: hashedPassword,
            email: body.email,
        })

        return result
    }

    async updateUser(@Param(':id') id:number , @Body() body: UpdateUserDto): Promise<User>{
        const existUser = await this.userRepository.findOne({ where: {id: id} })
        if (!existUser) throw new Exception(`User does not exist`, 404)

        const hashedPassword = await hashPassword(body.password)
        const result: User = await this.userRepository.save({
            username: body.username,
            password: hashedPassword
        })

        return result
    }
}