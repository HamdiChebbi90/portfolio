import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from 'src/app/form.service';
import { Experience } from 'src/app/models/experince';
import { Formulaire } from 'src/app/models/formulaire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() personne: Formulaire[] = [];





  experiences: Experience[] = [];


  constructor(
    private formServ: FormService,
    private router: Router
    ) {

    }

  ngOnInit() {
  }
  onSubmit(form: any) {
    console.log(form.value);
    //concatine the form with the experience
    form.value.experience = this.experiences;

    this.formServ.addFormulaire(form.value);
    form.reset();

  }

  experienceForm: Experience = {
    title: '',  place: '', startDate: new Date(), endDate: new Date(), description: ''

    };
  addExperience() {
    this.experiences.push(this.experienceForm);
    console.log(this.experiences);
    console.log(this.experienceForm);
    this.experienceForm = {
      title: '',  place: '', startDate: new Date(), endDate: new Date(), description: ''
      };

  }

  deleteExperience(index: number) {
    this.experiences.splice(index, 1);
  }
  serv()
  {

this.router.navigate(['/experience']);    }






}



