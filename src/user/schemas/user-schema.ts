import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type UsersDocument = Users & Document

@Schema()
export class Users{
    @Prop({
        required: [true, 'Login field is required'],
        trim: true,
        unique: true,
    })
    login:string;

    @Prop({
        required: [true, 'Password field is required'],
        trim: true,
    })
    password:string;

    @Prop({
        required: [true, 'Role field is required'],
        trim: true,
    })
    role:string;

    @Prop({
        required: [true, 'FullName field is required'],
        trim: true,
    })
    fullName:string;

    @Prop({
        required: [true, 'DateOfBirth field is required'],
        trim: true,
    })
    dateOfBirth:string;

    @Prop({
        required: [true, 'Gmail field is required'],
        trim: true,
    })
    gmail:string;

    @Prop({
        trim: true,
    })
    nubmerTel:string;

    @Prop({
        trim: true,
    })
    bloodeType:string;

    @Prop({
        trim: true,
    })
    expOfWork:string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);