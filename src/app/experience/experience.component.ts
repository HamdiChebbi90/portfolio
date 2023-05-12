import { Component, Input } from '@angular/core';
import * as Aos from 'aos';
import { Experience } from '../models/experince';
import { Formulaire } from '../models/formulaire';
import { FormPortService } from '../form-port.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  @Input() personne: Formulaire[] = [];

  constructor(
    private formPort: FormPortService
  ) { }


  ngOnInit() {

    console.log(this.personne);

  }





}
