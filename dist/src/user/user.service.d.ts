import { LoginUser } from 'src/user/interface/login.interface';
import { User } from 'src/user/interface/user.interface';
export declare class UserService {
    login(login: LoginUser): string;
    register(newUser: User): string;
}
