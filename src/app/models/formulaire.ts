import { Education } from "./cv";
import { Experience } from "./experince";

export class Formulaire {
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
    
    public objectif: string,

  )
  {}
}
