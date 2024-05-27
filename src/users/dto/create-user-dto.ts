import { IsEmail, Length } from 'class-validator';
export class CreateUserDto {

@IsEmail()
email: string;  

userName: string;

@Length(8, 20)
password: string;

}

