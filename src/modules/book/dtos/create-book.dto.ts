import { IsString } from 'class-validator'

export class CreateBookDto {
    // @IsString()
    title: string
    author: string
}
