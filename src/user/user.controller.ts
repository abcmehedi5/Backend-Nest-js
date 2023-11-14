<<<<<<< HEAD
import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {}
=======
import { UserService } from './user.service';
import { Controller, Post, Get, Res, Body, HttpStatus, Param, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/userDTO/create.user.dto';
import { IUser } from 'src/interfaces/User-interface/user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    // create user
    @Post('/create')
    async createUser(@Res() response, @Body() createUserDto: CreateUserDto) {
        try {
            const newUser = await this.userService.createUser(createUserDto)
            return response.status(HttpStatus.CREATED).json({
                statusCode: 200,
                message: 'user register singup',
                newUser,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Oh! Sorry  user singup faild.',
                error: 'Bad Request',
            });
        }
    }
    // get all user
    @Get()
    async getUser(@Res() response) {
        try {
            const users = await this.userService.getUser();
            return response.status(HttpStatus.OK).send(users);
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'user not found',
                error: 'Bad Request',
            });
        }
    }

    // get single user
    @Get('/singleUser')
    async getSingleUser(@Res() response, @Query('email') email: string) {
        try {
            const getUser = await this.userService.getSingleUser(email)
            return response.status(HttpStatus.OK).send(getUser)
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'user not found',
                error: 'Bad Request',
            });
        }
    }


}
>>>>>>> 64152cce420c24137d03f09cb1e149fcc50ed727
