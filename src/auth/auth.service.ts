import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { IUser } from 'src/user/interfaces/user.interface';

const JWT_KEY = 'example'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async login(email: string, password: string): Promise<string>{
        const user = await this.userService.getUserByEmail(email);
        if(!user){
            throw new Error('Usuario não existe')
        }
        const passwordValidate = await bcrypt.compare(password, user.password);
        
        if(!passwordValidate){
            throw new Error('Senha inválida')
        }
        
        const payload = { user: user._id, email: user.email }

        return jwt.sign(payload, JWT_KEY, { expiresIn: '1h' });
    }

    async validateUser(payload: any): Promise<IUser>{
        return this.userService.getUserById(payload.userId);
    }

}
