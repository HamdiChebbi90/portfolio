import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormService } from 'src/app/form.service';
import { Experience } from 'src/app/models/experince';
import { Formulaire } from 'src/app/models/formulaire';
import { Education } from 'src/app/models/education';
import jsPDF, { RGBAData } from 'jspdf';





@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent {

  @ViewChild('dataToExport', { static: false })
   public dataToExport: ElementRef | any;

  @Input() personne: Formulaire[] = [];
  title = 'htmltopdf';
  pdfName: any;
  template: any;


  constructor(
    private formServ: FormService
  ) { }



  ngOnInit() {
    console.log(this.personne);
    console.log(this.personne[0].education[0].title)
    // console.log(this.personne[0].experience[0].title)
  }

  download() {
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.html(this.dataToExport.nativeElement, {
      callback: (doc) => {
        doc.save("test.pdf");
      }
    });

  }

}
