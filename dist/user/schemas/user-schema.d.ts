import { Document } from 'mongoose';
export declare type UsersDocument = Users & Document;
export declare class Users {
    login: string;
    password: string;
    role: string;
    fullName: string;
    dateOfBirth: string;
    gmail: string;
    nubmerTel: string;
    bloodeType: string;
    expOfWork: string;
}
export declare const UsersSchema: import("mongoose").Schema<Document<Users, any>, import("mongoose").Model<any, any, any>, undefined>;
