import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';
import { MongooseModule } from '@nestjs/mongoose';
import config from './../config';
@Global()
@Module({
  imports: [
    //MongooseModule.forRoot(process.env.URI_MONGODB),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, dbName } =
          configService.mongo;
        return {
          uri: `${connection}://${user}:${password}@${host}/?retryWrites=true&w=majority`,
          user,
          pass: password,
          dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, dbName } =
          configService.mongo;
        const uri = `mongodb+srv://invincible:property_password_321@invincible.hjddlxk.mongodb.net/?retryWrites=true&w=majority`;
        //const uri = `${connection}://${user}:${password}@${host}/?retryWrites=true&w=majority`;
        //const uri = `${connection}://${user}:${password}@${host}/${dbName}`;
        //const uri = process.env.URI_MONGODB;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(dbName);
        return database;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['MONGO', MongooseModule],
})
export class DatabaseModule {}
