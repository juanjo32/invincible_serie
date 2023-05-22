import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';

//const pubsCollection = database.collection('pubs');
//const pubs = await pubsCollection.find().toArray();
//console.log(pubs);

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO',
      useFactory: async () => {
        const uri =
          'mongodb://invicible:property_password_321@localhost:27017/?authMechanism=DEFAULT';
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('invincible');
        return database;
      },
    },
  ],
  exports: ['MONGO'],
})
export class DatabaseModule {}
