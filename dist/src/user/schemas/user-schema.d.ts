import { Document } from 'mongoose';
export declare type UsersDocument = Users & Document;
export declare class Users {
    Login: string;
    Password: string;
    Role: string;
    FullName: string;
    DateOfBirth: string;
    Gmail: string;
    NubmerTel: string;
    BloodeType: string;
    ExpOfWork: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<Users, any>, import("mongoose").Model<any, any, any>, undefined>;
