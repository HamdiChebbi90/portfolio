import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from 'src/app/form.service';
import { Formulaire } from 'src/app/models/formulaire';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() personne: Formulaire[] = [];


  constructor(
    private formServ: FormService
  ) { }

  ngOnInit() {
  }
onSubmit(form: any) {
  console.log(form.value);
  this.formServ.addFormulaire(form.value);
  form.reset();

}








}



