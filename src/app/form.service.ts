import { Injectable } from '@angular/core';
import { Formulaire } from './models/formulaire';

@Injectable({
  providedIn: 'root'
})
export class FormService {

private tab : Formulaire[] =[];

  constructor() {
    this.tab = [];
   }

  addFormulaire(newPersonne: Formulaire) {
    newPersonne._id = this.tab.length !=0 ?
     this.tab[this.tab.length - 1]._id + 1 : 1;
    console.log(newPersonne);
    // how add the newposone the the beginning of the array?
    this.tab.unshift(newPersonne);
    // this.tab.push(newPersonne);
    console.log(this.tab);
  }

  deleteFormulaire(personne: Formulaire) {
    const index = this.tab.indexOf(personne);
    this.tab.splice(index, 1);
  }


  getFormulaire() {
    return this.tab;
  }

  getafteradd(): Formulaire {
    return this.tab[this.tab.length - 1];
  }









}
