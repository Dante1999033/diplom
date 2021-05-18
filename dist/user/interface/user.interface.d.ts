export interface User extends Document {
    id_user: number;
    login: string;
    password: string;
    role: string;
    fullName: string;
    dateOfBirth: string;
    gmail: string;
    number?: string;
    bloodType?: string;
    expOfWork?: number;
}
