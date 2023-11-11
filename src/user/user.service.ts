import { CreateUserDto } from './../dto/userDTO/create.user.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/interfaces/User-interface/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private userModel: Model<IUser>) { }

    // create user
    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        const createUser = await new this.userModel(createUserDto);
        return createUser.save()

    }
}
