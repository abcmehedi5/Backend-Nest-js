import { CreateUserDto } from './../dto/userDTO/create.user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
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

    // find user
    async getUser(): Promise<IUser[]> {
        const getUserData = await this.userModel.find()
        if (!getUserData || getUserData.length == 0) {
            throw new NotFoundException(
                'sorry user data not found'
            )
        }
        return getUserData
    }
}
