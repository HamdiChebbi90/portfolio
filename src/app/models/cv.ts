import { Experience } from "./experince";

export interface Cv{
    firstName: string;
    lastName: string;
    birthday: Date;
    email: string;
    phone: number;
    adress: string;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    languages: Language[];
    hobbies: Hobby[];
    about: string;


}

export interface Education {
    title: string;
    startDate: Date;
    endDate: Date;
    place: string;
    description: string;
}

export interface Skill {
    name: string;
    level: number;
}

export interface Language {
    name: string;
    level: number;
}

export interface Hobby {
    name: string;
}
