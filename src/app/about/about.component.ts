import { Component } from '@angular/core';
import * as Aos from 'aos';
import { FormService } from '../form.service';
import { Formulaire } from '../models/formulaire';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  tabForm:Formulaire[]=[];


  constructor( private formServ:FormService) { }


  ngOnInit() {
    Aos.init();
    this.tabForm=this.formServ.getFormulaire();
    }
}
