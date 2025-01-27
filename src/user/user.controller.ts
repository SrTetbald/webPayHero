import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './interfaces/user.interface';
import { get } from 'mongoose';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async createUser(@Body() user: IUser) {
        return await this.userService.createUser(user);
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<IUser> {
        return await this.userService.getUserByEmail(id);
    }

    @Get('email/:email')
    async getUserByEmail(@Param('email') email: string): Promise<IUser | null> {
        return this.userService.getUserByEmail(email);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() body: Partial<IUser>): Promise<IUser | null> {
    return this.userService.updateUser(id, body);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<IUser | null> {
        return this.userService.deleteUser(id);
    }
    
}
