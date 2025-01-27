// src/heroes/heroes.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { HeroSchema } from './model/heroes.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Hero', schema: HeroSchema }]),
  ],
  providers: [HeroesService],
  controllers: [HeroesController],
})
export class HeroesModule {}
