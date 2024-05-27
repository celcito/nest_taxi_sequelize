

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trip } from './model/trip.model';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';

@Module({
  imports: [SequelizeModule.forFeature([Trip])],
  providers: [TripsService],
  controllers: [TripsController],
  exports: [TripsService]
})
export class TripsModule {}