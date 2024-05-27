import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './model/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

/*   create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({
      userName: createUserDto.userName,
      email: createUserDto.email,
      password: createUserDto.password,
    });
  } */


  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    return this.userModel.create({
      userName: createUserDto.userName,
      email: createUserDto.email,
      password: hashedPassword,
    });

  }


  









  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
