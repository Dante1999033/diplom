/// <reference types="mongoose" />
import { LoginUser } from 'src/user/interface/login.interface';
import { UserService } from './user.service';
import { User } from 'src/user/interface/user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(login: LoginUser): Promise<User & import("mongoose").Document<any, any>>;
    register(newUser: User): Promise<User>;
}
