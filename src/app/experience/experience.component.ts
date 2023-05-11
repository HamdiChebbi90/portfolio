import { Component, Input } from '@angular/core';
import * as Aos from 'aos';
import { Experience } from '../models/experince';
import { FormService } from '../form.service';
import { Formulaire } from '../models/formulaire';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  @Input() personne: Formulaire[] = [];

  experiences: Experience[] = [];

  constructor(
    private formServ: FormService
  ) { }


  ngOnInit() {

    console.log(this.personne);

  }





}
