import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBookDto } from '../dtos/create-book.dto';
import { from, Observable } from 'rxjs';
import { Book } from '../models/book.interface'
import { BookService } from '../services/book.service';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

    @Post('/create-book')
    async create(@Body() body: CreateBookDto){
        const result = await this.bookService.createBook(body)
        return { statusCode: 200, messages: 'Success.', data: result}
    }

    @Get('/get-book')
    async getAllBook(){
        const result = await this.bookService.getAllBook()
        return { statusCode: 200, messages: 'Success.', data: result}
    }
}
// gaenen follow naaku