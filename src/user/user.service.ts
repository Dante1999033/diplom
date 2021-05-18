import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {LoginUser} from 'src/user/interface/login.interface';
import { User } from 'src/user/interface/user.interface';
import { Users, UsersDocument } from './schemas/user-schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(Users.name) private UserModel: Model<User>){

    }

    async login(login: LoginUser) {
        let user = await this.UserModel.findOne({Login:login.email});



        return user;
    }

    public async register(newUser: User): Promise<User> {
        let createdUser = new this.UserModel(newUser);
        let user:User;
        user = await createdUser.save();

        return await user;
    }


}
