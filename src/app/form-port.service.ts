import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormPortService {

  private tab : any[] =[];

  constructor() {
    this.tab = [];
   }


  addFormulaire(newPersonne: any) {
    newPersonne._id = this.tab.length !=0 ?
     this.tab[this.tab.length - 1]._id + 1 : 1;
    console.log(newPersonne);
    // how add the newposone the the beginning of the array?
    this.tab.unshift(newPersonne);
    // this.tab.push(newPersonne);
    console.log(this.tab);
  }

  getFormulaire() {
    return this.tab;
  }




}
