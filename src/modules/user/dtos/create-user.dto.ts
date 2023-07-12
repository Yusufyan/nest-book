import { IsEmail } from "class-validator"

export class CreateUserDto {

    username: string

    @IsEmail({}, { message: 'Email is not valid' })
    email: string

    password: string
}