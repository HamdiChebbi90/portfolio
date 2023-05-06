import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {


  ngOnInit() {
  Aos.init();
  }

}
