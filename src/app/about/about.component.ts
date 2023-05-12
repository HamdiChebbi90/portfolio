import { Component, Input } from '@angular/core';
import * as Aos from 'aos';
import { FormService } from '../form.service';
import { Formulaire } from '../models/formulaire';
import { FormPortService } from '../form-port.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  @Input() personne: Formulaire[] = [];


  constructor( private formPort:FormPortService) { }


  ngOnInit() {
    Aos.init();
    }
}
