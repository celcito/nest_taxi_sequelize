import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/user.module'
import { User } from './users/model/user.model';
import { Trip } from './trips/model/trip.model';
import { AppService } from './app.service';
import { TripsModule } from './trips/trips.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '172.26.0.2',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'vadetaxi',
      synchronize:true,
      logging: console.log,
      models: [User,Trip],
    }),
    
    UsersModule,
    TripsModule,
    AuthModule,
  ],
  providers:[AppService]
})
export class AppModule {}