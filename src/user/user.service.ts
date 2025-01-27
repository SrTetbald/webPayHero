import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { IUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';

const salt =  bcrypt.genSalt(10);

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private userModel: Model<IUser>
        ) {}

    //criar
    async createUser(user: IUser): Promise<IUser> {
        const newUser = new this.userModel(user);
        newUser.password = await bcrypt.hash(newUser.password, salt);
        return await newUser.save();
    }

    //buscar email
    async getUserByEmail(email: string): Promise<IUser> {
        return this.userModel.findOne({email})
    }
    //bucar id
    async getUserById(userId: string): Promise<IUser> {
        return this.userModel.findById({ userId })
    }
    //update
    async updateUser(userId: string, userData: Partial <IUser>): Promise<IUser | null>{
        return this.userModel.findByIdAndUpdate(userId, userData, {new: true})
    }
    //delete
    async deleteUser(userId: string): Promise<IUser | null> {
        return this.userModel.findByIdAndDelete(userId).exec();
    }


}
