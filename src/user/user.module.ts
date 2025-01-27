import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: userSchema}])
  ],
  exports: [
    UserService
  ],
  providers: [UserService]
})
export class UserModule {}
