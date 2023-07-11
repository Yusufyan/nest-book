import { Module } from '@nestjs/common';
import { BookEntity } from './models/book.entity';
import { BookService } from './services/book.service';
import { BookController } from './controllers/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}
