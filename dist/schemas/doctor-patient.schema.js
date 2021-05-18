"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorPatientSchema = void 0;
const mongoose = require("mongoose");
exports.DoctorPatientSchema = new mongoose.Schema({
    idDoctor: {
        type: String,
        required: [true, 'Id Doctor field is required'],
        trim: true,
    },
    idPatient: {
        type: String,
        required: [true, 'Id Patient field is required'],
        trim: true,
        unique: true,
    }
});
//# sourceMappingURL=doctor-patient.schema.js.map