import { Injectable, Body } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
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
    
    createBook(@Body() body: CreateBookDto, bookPost: Book): Observable<Book>{
        const existBook = this.bookRepository.findOneBy({no_id: body.no_id})
        if (existBook) throw new Exception (`Book ${body.no_id} already exists`, 400)

        return from(this.bookRepository.save(bookPost))
    }


}