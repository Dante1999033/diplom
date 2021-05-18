import { Model } from 'mongoose';
import { LoginUser } from 'src/user/interface/login.interface';
import { User } from 'src/user/interface/user.interface';
export declare class UserService {
    private UserModel;
    constructor(UserModel: Model<User>);
    login(login: LoginUser): Promise<User & import("mongoose").Document<any, any>>;
    register(newUser: User): Promise<User>;
}
