import { Controller, Post, Body, Patch, Param, ValidationPipe } from '@nestjs/common'
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserService } from '../services/user.service';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('user')
export class UserController {
    constructor( private userService: UserService ){}

    @Post('/create-user')
    async create(@Body(new ValidationPipe()) body: CreateUserDto ){
        const result = await this.userService.createUser(body)
        return { statusCode: 200, message: 'Success', data: result }
    }

    @Patch('/update-user/:id')
    async update(@Param('id') id:number ,@Body() body: UpdateUserDto){
        const result = await this.userService.updateUser(id, body)
        return { statusCode: 200, message: 'Success.', data: result}
    }
}