import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy} from 'passport-jwt';
import { AuthService } from "./auth.service";
import { IUser } from "src/user/interfaces/user.interface";

const JWT_SECRET = 'jwt-senac';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(private readonly authService: AuthService){
        super({
            jwtFromRequest: ExtractJwt.FromAuthHeaderAsBearerToken(),
            secretOrKey:JWT_SECRET,
        })
    }
    
    async validate(payload: any): Promise<IUser>{
        return this.authService.validateUser(payload);
    }
}