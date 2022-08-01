import { Gender } from "./Enums/Gender";

export interface Member {
    id:          string;
    name:        string;
    gender:      Gender;
    dateOfBirth: Date;
    email:       string;
    password:    string;
}