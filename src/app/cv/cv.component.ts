import { Component, EventEmitter, Output } from '@angular/core';
import { Formulaire } from '../models/formulaire';
import { FormService } from '../form.service';
import { Experience } from '../models/experince';
import { Education } from '../models/education';
import { Skill } from '../models/skill';
import { Project } from '../models/project';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {


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


constructor(private formServ:FormService) { }

ngOnInit() {


this.personne=this.formServ.getFormulaire();
console.log(this.formServ.getFormulaire());



}


}

