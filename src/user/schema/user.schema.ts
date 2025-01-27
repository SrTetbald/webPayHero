import { Schema } from "mongoose";

export const userSchema = new Schema({
    name: { type: String, required: true},
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
},
    { timestamps: true }); // para quando vai receber a date