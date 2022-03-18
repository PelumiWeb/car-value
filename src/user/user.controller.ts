import { Body, Controller, Get, Post } from '@nestjs/common';
import {CreateUserDtos} from "./dtos/create-user.dto"
import {UserService} from "./user.service"

@Controller('auth')
export class UserController {
    constructor(private usersService: UserService) {}

    @Post("/signup")
    createUser(@Body() body: CreateUserDtos) {
        this.usersService.create(body.email, body.password)
    }


}
