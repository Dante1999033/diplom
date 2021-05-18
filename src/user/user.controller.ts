import { Controller, Post, Body} from '@nestjs/common';

import {LoginUser} from 'src/user/interface/login.interface';
import {UserService} from './user.service';
import {User} from 'src/user/interface/user.interface';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('login')
    async login(@Body('login') login: LoginUser) {
        return this.userService.login(login);
    }
    
    @Post('register')
    async register(@Body('newUser') newUser:User){
        return this.userService.register(newUser);
    }
}
