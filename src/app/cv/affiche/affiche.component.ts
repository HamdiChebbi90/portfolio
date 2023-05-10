import { Component, Input } from '@angular/core';
import { FormService } from 'src/app/form.service';
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
    console.log(this.personne[0]);
  }

  deletePersonne(personne: Formulaire) {
    this.formServ.deleteFormulaire(personne);
  }

  getafteradd(): Formulaire {
    return this.formServ.getafteradd();
  }









}
