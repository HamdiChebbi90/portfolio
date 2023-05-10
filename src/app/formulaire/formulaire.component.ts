import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  constructor( private formServ:FormService ) {

  }


  onSubmit(newForm: any) {
    this.formServ.addFormulaire(newForm.value);
    newForm.reset();


  }


}
