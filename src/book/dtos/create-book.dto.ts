import { IsString } from 'class-validator'

export class CreateBookDto {
    // @IsString()
    no_id: string
    title: string
    author: string
}
