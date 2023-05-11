import { Component, EventEmitter, Output } from '@angular/core';
import { Formulaire } from '../models/formulaire';
import { FormService } from '../form.service';
import { Experience } from '../models/experince';

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



constructor(private formServ:FormService) { }

ngOnInit() {


this.personne=this.formServ.getFormulaire();
console.log(this.formServ.getFormulaire());



}


}

