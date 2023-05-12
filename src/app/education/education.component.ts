import { Component, Input } from '@angular/core';
import * as Aos from 'aos';
import { Formulaire } from '../models/formulaire';
import { FormPortService } from '../form-port.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {


  @Input() personne: Formulaire[] = [];

  constructor(
    private formPort: FormPortService
  ) { }


  ngOnInit() {
  Aos.init();
    console.log(this.formPort.getFormulaire());
  }

}
