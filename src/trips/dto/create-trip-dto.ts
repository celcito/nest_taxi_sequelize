import { Length } from 'class-validator';
export class CreateTripDto {

@Length(8, 20)
address_start: string;

@Length(8, 20)
address_finish: string;

user_id: string;

isStarted: boolean;

isFinished: boolean;

isActive: boolean;

}





