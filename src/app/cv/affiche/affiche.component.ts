import { Component, Input } from '@angular/core';
import { FormService } from 'src/app/form.service';
import { Experience } from 'src/app/models/experince';
import { Formulaire } from 'src/app/models/formulaire';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent {

  @Input() personne: Formulaire[] = [];


  constructor(
    private formServ: FormService
  ) { }



  ngOnInit() {
    console.log(this.personne);
    // console.log(this.personne[0].experience[0].title)
  }



  // getafteradd(): Formulaire {
  //   return this.formServ.getafteradd();
  // }



  download() {
    // const doc = new jspdf();
    // doc.text('Hello world!', 10, 10);
    // doc.save('a4.pdf');
  }










}


