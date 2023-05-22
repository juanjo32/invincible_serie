import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { MongoClient } from 'mongodb';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PublicationsModule } from './publications/publications.module';
import { CommentsModule } from './comments/comments.module';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import config from './config';

const uri =
  'mongodb://invicible:property_password_321@localhost:27017/?authMechanism=DEFAULT';
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const database = client.db('invincible');
  const pubsCollection = database.collection('pubs');
  const pubs = await pubsCollection.find().toArray();
  console.log(pubs);
}
run();
@Module({
  imports: [
    UsersModule,
    PublicationsModule,
    CommentsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
