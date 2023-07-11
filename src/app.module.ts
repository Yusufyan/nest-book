import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module'; 
import { UserModule } from './modules/auth/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './configs/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true 
    }),
    DatabaseModule,
    BookModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
