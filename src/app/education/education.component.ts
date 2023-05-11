import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {





  ngOnInit() {
  Aos.init();

  }

}
