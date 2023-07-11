import { Injectable, Body } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { generatedId } from 'src/utils/util';
import { BookEntity } from '../models/book.entity';
import { Repository } from 'typeorm';
import { Book } from '../models/book.interface';
import { CreateBookDto } from '../dtos/create-book.dto';
import { Exception } from 'src/utils/custom-exception';


@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>
    ){}
    
    async createBook(@Body() body: CreateBookDto): Promise<Book>{

        const allBook = await this.bookRepository.find()
        let nextBook = allBook.length + 1

        const existBookTitle = await this.bookRepository.findOne({where: {title: body.title}})
        if (existBookTitle) throw new Exception (`Book ${body.title} already exists`, 400)

        const result: Book = await this.bookRepository.save({
            no_id: generatedId('B', nextBook),
            title: body.title,
            author: body.author
        })

        return result
    }

    async getAllBook(): Promise<Book[]>{
        const getBook = await this.bookRepository.find()

        return getBook
    }
    

}