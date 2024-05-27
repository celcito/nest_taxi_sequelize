



import { Body, Controller, Put, Get, Param, Post,HttpException, HttpStatus  } from '@nestjs/common';
import { CreateTripDto } from './dto/create-trip-dto';
import { Trip } from './model/trip.model';
import { TripsService } from './trips.service';
import { ValidationPipe } from '@nestjs/common';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post('')

   async create(@Body(new ValidationPipe()) createTripDto: CreateTripDto):Promise<Trip>  {    
    return this.tripsService.create(createTripDto);
  } 

  @Get('')
   async findAll(): Promise<Trip[]> {
    //whewre id = user_id
    return await this.tripsService.findAll();
  }


   @Put(':id')
   updateIsActive(@Param('id') id: string): string {
    try {
      return "Corrida Cancelada com sucesso"


    } catch (error) {
      console.error(error);
   
      throw new HttpException({ success: false, message: error.message }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

}
