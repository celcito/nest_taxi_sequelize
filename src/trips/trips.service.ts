

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTripDto } from './dto/create-trip-dto';
import { Trip } from './model/trip.model';


@Injectable()
export class TripsService {
  constructor(
    @InjectModel(Trip)
    private readonly tripModel: typeof Trip,
  ) {}

  async create(createTripDto: CreateTripDto): Promise<Trip> {
    return this.tripModel.create({
      address_start: createTripDto.address_start,
      address_finish: createTripDto.address_finish,
      user_id: createTripDto.user_id,
    });
  }

  async findAll(): Promise<Trip[]> {
    return this.tripModel.findAll();
  }

 
  async cancelTrip(id: string): Promise<Trip> {
    const trip = await this.findOne(id); // Supondo que esta função retorna o objeto Trip
    if (!trip) {
      throw new Error("Trip not found");
    }
  
  return  await trip.update({ isActive: false }); // Atualiza o campo isActive para false
  }
  
  findOne(id: string): Promise<Trip> {
    return this.tripModel.findOne({
      where: {
        id,
      },
    });
  }


}
