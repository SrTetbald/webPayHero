import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [HeroesModule,
        MongooseModule.forRoot('mongodb://root:example@localhost:27017/heroes?authSource=admin'),
        UserModule, // URL de conexão com o MongoDB

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
