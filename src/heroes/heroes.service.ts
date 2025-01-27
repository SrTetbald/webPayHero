// src/heroes/heroes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hero } from './interfaces/heroes.interface';

@Injectable()
export class HeroesService {
  constructor(
    @InjectModel('Hero') private readonly heroModel: Model<Hero>,
  ) {}

  // Encontrar todos os heróis
  async findAll(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }

  // Encontrar herói por ID
  async findById(id: string): Promise<Hero> {
    return this.heroModel.findById(id).exec();
  }

  // Criar um novo herói
  async create(hero: Hero): Promise<Hero> {
    const createdHero = new this.heroModel(hero);
    return createdHero.save();
  }

  // Atualizar um herói
  async update(id: string, hero: Hero): Promise<Hero> {
    return this.heroModel.findByIdAndUpdate(id, hero, { new: true }).exec();
  }

  // Deletar um herói
  async delete(id: string): Promise<any> {
    return this.heroModel.findByIdAndDelete(id).exec();  // Mudança aqui
  }
}
