import { UserService } from './user.service';
import { Controller, Post, Get, Res, Body, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/userDTO/create.user.dto';

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


}
