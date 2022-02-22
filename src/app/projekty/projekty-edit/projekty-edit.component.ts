import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {KlientService} from "../../shared/klient.service";
import {Projekt} from "../../shared/projekt.model";

@Component({
  selector: 'app-projekty-edit',
  templateUrl: './projekty-edit.component.html',
  styleUrls: ['./projekty-edit.component.css']
})
export class ProjektyEditComponent implements OnInit {
  projekt!: Projekt;
  id!: number;
  id2!: number;
  novyProjektForm!: FormGroup;

  constructor(private klientServise: KlientService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.id2 = +params['id2'];
        this.projekt = this.klientServise.getProjektid(this.id, this.id2);
      }
    );

    this.novyProjektForm = new FormGroup({
      'nazov': new FormControl(this.projekt.nazov, Validators.required),
      'popis': new FormControl(this.projekt.popis, Validators.required),
      'datum': new FormControl(this.projekt.datum, Validators.required),
      'adresaprojektu': new FormControl(this.projekt.adresaprojektu, Validators.required),
      'ukoncene': new FormControl(null)
    })
  }

  onSubmit() {
    this.klientServise.updateProjekt(this.id, this.id2, this.novyProjektForm.value);
    this.router.navigate(['/projekty']);
    this.klientServise.checkProjekt();
  }

  zrusit() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
