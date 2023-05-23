import { PassportStrategy } from '@nestjs/passport';
import { ConfigService, ConfigType } from '@nestjs/config';
import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import config from 'src/config';
import { PayloadToken } from '../models/token.model';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(config.KEY) configService: ConfigType<typeof config>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.jwtSecret,
    });
  }

  validate(payload: PayloadToken) {
    return payload;
  }
}
