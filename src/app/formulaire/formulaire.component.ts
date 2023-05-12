import { Component, Input } from '@angular/core';
import { FormPortService } from '../form-port.service';
import { Formulaire } from '../models/formulaire';
import { Experience } from '../models/experince';
import { Education } from '../models/education';
import { Skill } from '../models/skill';
import { Project } from '../models/project';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  @Input () personne: Formulaire[] = [];

  activatedRoute !: ActivatedRoute

  experiences: Experience[] = [];
  educations: Education[] = [];
  skills: Skill[] = [];
  projects: Project[] = [];

  constructor( private  formPort: FormPortService
    ,private router:Router) {

  }


  onSubmit(form: any) {
console.log(form.vaue)
    form.value.experience = this.experiences;
    form.value.education = this.educations;
    form.value.skills = this.skills;
    form.value.projects = this.projects;

    this.formPort.addFormulaire(form.value);
    form.reset();

  this.router.navigate(['home'], {relativeTo: this.activatedRoute});
  }

  experienceForm: Experience = {
    title: '',  place: '', startDate: new Date(), endDate: new Date(), description: ''
  };

  educationForm: any = {
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    university: '',
    departement: '',
    description: '',
    mention: ''
  };

  skillForm: any = {
    title: '',
    description: ''
  };

  projectForm: any = {
    title: '',
    description: '',
    link: ''
  };

  addExperience() {
    this.experiences.push(this.experienceForm);
    this.experienceForm = {
      title: '',  place: '', startDate: new Date(), endDate: new Date(), description: ''
    };
  }

  addEducation() {
    this.educations.push(this.educationForm);
    this.educationForm = {
      title: '',
      startDate: new Date(),
      endDate: new Date(),
      university: '',
      departement: '',
      description: '',
      mention: ''
    };
  }


  addSkill() {
    this.skills.push(this.skillForm);
    this.skillForm = {
      title: '',
      description: ''
    };
  }

  addProject() {
    this.projects.push(this.projectForm);
    this.projectForm = {
      title: '',
      description: '',
      link: ''
    };
  }


  deleteExperience(index: number) {
    this.experiences.splice(index, 1);
  }

  deleteEducation(index: number) {
    this.educations.splice(index, 1);
  }

  deleteSkill(index: number) {
    this.skills.splice(index, 1);
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
  }




}
