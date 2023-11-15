import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './../dto/userDTO/create.user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/entity/User/user.entity';
import { Repository, FindOneOptions } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  // create user
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  // find user
  async getUser(): Promise<UserEntity[]> {
    const getUserData = await this.usersRepository.find();
    if (!getUserData || getUserData.length == 0) {
      throw new NotFoundException('sorry user data not found');
    }
    return getUserData;
  }
  // get single user by email
  async getSingleUser(email: string): Promise<UserEntity> {
    const getUserData = await this.usersRepository.findOne({
      email,
    } as FindOneOptions<UserEntity>);
    if (!getUserData) {
      throw new NotFoundException('sorry user data not found');
    }
    return getUserData;
  }
}
