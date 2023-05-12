import { Education } from "./education";
import { Experience } from "./experince";
import { Project } from "./project";
import { Skill } from "./skill";
export class Formulaire {
  reset() {
    throw new Error('Method not implemented.');
  }
  value: any;
  constructor(
    public _id: number,
    public firstname: string,
    public lastname: string,
    public birthday: number,
    public email: string,
    public phone: number,
    public adress: string,
    public city: string,
    public zip: number,
    public country: string,
    public image: string,
    public language: string,
    public about: string,
    public job: string,
    public path: string,
    public description: string,
    public experience: Experience[],
    public education: Education[],
    public skill: Skill[],
    public project: Project[],

    public objectif: string,

  )
  {}
}

