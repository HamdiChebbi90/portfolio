import { Component } from '@angular/core';
import { Formulaire } from '../models/formulaire';
import { Experience } from '../models/experince';
import { FormService } from '../form.service';

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
  constructor(
    private formServ:FormService  ) { }

  ngOnInit() {

    this.personne=this.formServ.getFormulaire();
    console.log(this.formServ.getFormulaire());
  }




}
