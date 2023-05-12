import { Component } from '@angular/core';
import { Formulaire } from '../models/formulaire';
import { Experience } from '../models/experince';
import { FormPortService } from '../form-port.service';
import { Skill } from '../models/skill';
import { Education } from '../models/education';
import { Project } from '../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  personne: Formulaire[]=[];
experience: Experience = {
  title: '',  place: '', startDate: new Date(), endDate: new Date(), description: ''

  };

  education: Education = {
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    university: '',
    departement: '',
    mention: '',
    };

    skill: Skill = {
      name: '',
      level: 0,
      };

      project: Project = {
        title: '',
        description: '',
        date: new Date(),
        link: '',
        };

  constructor(
    private formPort:FormPortService ) { }

  ngOnInit() {

    this.personne=this.formPort.getFormulaire();
    console.log(this.formPort.getFormulaire());

  }




}
