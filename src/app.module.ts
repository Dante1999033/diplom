import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { databaseProviders } from './app.providers';
import { connectioMongoDB } from './constants';
import { UserModule } from './user/user.module';


@Module({
  // providers:[
  //   ...databaseProviders
  // ],
  // exports:[
  //   ...databaseProviders
  // ],
  imports: [ 

    //UserModule,
    MongooseModule.forRoot('mongodb+srv://DanteSpardov:qwe1234@cluster0.n1xob.mongodb.net/Diplom?retryWrites=true&w=majority', 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    //('mongodb+srv://DanteSpardov:qwe1234@cluster0.n1xob.mongodb.net/Diplom?retryWrites=true&w=majority')
  ],
})
export class AppModule {}
