import { Strategy, ExtractJwt } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { UserService } from 'src/modules/auth/services/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly userService: UserService,
        private readonly configService: ConfigService,
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret'
        })
    }

    async validate (payload: any){
        const user = await this.userService.validateUser(payload.sub)
        if(!user){
            throw new UnauthorizedException()
        }

        delete user.password
        
        return user
    }
}