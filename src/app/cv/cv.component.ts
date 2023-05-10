import { Component, EventEmitter, Output } from '@angular/core';
import { Formulaire } from '../models/formulaire';
import { FormService } from '../form.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

@Output()

personne: Formulaire[]=[];
selctdataform: Formulaire []=[];


constructor(private formServ:FormService) { }

ngOnInit() {


this.personne=this.formServ.getFormulaire();
console.log(this.formServ.getFormulaire());



}


}

