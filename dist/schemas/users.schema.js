"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    Login: {
        type: String,
        required: [true, 'Login field is required'],
        trim: true,
        unique: true,
    },
    Password: {
        type: String,
        required: [true, 'Password field is required'],
        trim: true,
    },
    Role: {
        type: String,
        required: [true, 'Role field is required'],
        trim: true,
    },
    FullName: {
        type: String,
        required: [true, 'Fullname field is required'],
        trim: true,
    },
    DateOfBirth: {
        type: String,
        required: [true, 'Password field is required'],
        trim: true,
    },
    Gmail: {
        type: String,
        required: [true, 'Gmail field is required'],
        trim: true,
    },
    NubmerTel: {
        type: String,
        trim: true,
    },
    BloodeType: {
        type: String,
        trim: true,
    },
    ExpOfWork: {
        type: String,
        trim: true,
    }
});
//# sourceMappingURL=users.schema.js.map