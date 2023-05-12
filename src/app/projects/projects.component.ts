import { Component, Input } from '@angular/core';
import * as Aos from 'aos';
import { FormPortService } from '../form-port.service';
import { Formulaire } from '../models/formulaire';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {


  @Input() personne: Formulaire[] = [];

  constructor(
    private formPort: FormPortService
  ) { }



  ngOnInit() {
    Aos.init();
    }

}
