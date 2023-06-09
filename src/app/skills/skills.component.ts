import { Component, Input } from '@angular/core';
import { Formulaire } from '../models/formulaire';
import { FormPortService } from '../form-port.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {



  @Input() personne: Formulaire[] = [];

  constructor(
    private formPort: FormPortService
  ) { }

  ngOnInit() {

    }


}
