import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from 'src/app/form.service';
import { Experience } from 'src/app/models/experince';
import { Formulaire } from 'src/app/models/formulaire';
import { Education } from 'src/app/models/education';
import { Skill } from 'src/app/models/skill';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() personne: Formulaire[] = [];





  experiences: Experience[] = [];
  educations: Education[] = [];
  skills: Skill[] = [];
  projects: Project[] = [];


  constructor(
    private formServ: FormService,
    ) {

    }

  ngOnInit() {
  }
  onSubmit(form: any) {
    console.log(form.value);
    //concatine the form with the experience
    form.value.experience = this.experiences;
    form.value.education = this.educations;
    form.value.skill = this.skills;
    form.value.project = this.projects;

    this.formServ.addFormulaire(form.value);
    form.reset();

  }

  experienceForm: Experience = {
    title: '',  place: '', startDate: new Date(), endDate: new Date(), description: ''

    };


  educationForm: Education = {
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    university: '',
    departement: '',
    mention: '',
    };

  skillForm: Skill = {
    name: '',
    level: 0,

    };

  projectForm: Project = {
    title: '',
    description: '',
    date: new Date(),
    link: '',
    };






  addExperience() {
    this.experiences.push(this.experienceForm);


    console.log(this.experiences);
    console.log(this.experienceForm);
    this.experienceForm = {
      title: '',  place: '', startDate: new Date(), endDate: new Date(), description: ''
      };



  }


  addEducation() {
    this.educations.push(this.educationForm);
    console.log(this.educations);
    console.log(this.educationForm);
    this.educationForm = {
      title: '', startDate: new Date(),  endDate: new Date(),  university: '',  departement: '',  mention: '',
      };}

      addSkill() {
        this.skills.push(this.skillForm);
        this.skillForm = {
          name: '',  level: 0,
          };}
          addProject() {
            this.projects.push(this.projectForm);
            this.projectForm = {
              title: '',  description: '',  date: new Date(),  link: '',
              };}


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



