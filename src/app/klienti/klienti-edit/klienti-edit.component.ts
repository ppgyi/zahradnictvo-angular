import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

import {KlientService} from "../../shared/klient.service";

@Component({
  selector: 'app-klienti-edit',
  templateUrl: './klienti-edit.component.html',
  styleUrls: ['./klienti-edit.component.css']
})
export class KlientiEditComponent implements OnInit {
  id!: number;
  editMode = false;
  klientFormular!: FormGroup;
  zobraz = false;

  constructor(private route: ActivatedRoute,
              private klientService: KlientService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.spustenieFormulara();
      }
    )
  }
  get controls() { // a getter!
    return (<FormArray>this.klientFormular.get('projekty')).controls;
  }

  private spustenieFormulara() {
    let meno = '';
    let priezvisko = '';
    let adresa = '';
    let telefon = '';
    let email = '';
    let projekty = new FormArray([]);
    let projektyukoncene = new FormArray([]);

    if (this.editMode) {
      const klient = this.klientService.getKlientid(this.id);
      meno = klient.meno;
      priezvisko = klient.priezvisko;
      adresa = klient.adresa;
      telefon = klient.telefon;
      email = klient.email;
      if (klient['projekty']) {
        for (let projekt of klient.projekty) {
          projekty.push(
            new FormGroup({
              'nazov': new FormControl(projekt.nazov, Validators.required),
              'popis': new FormControl(projekt.popis, Validators.required),
              'datum': new FormControl(projekt.datum, Validators.required),
              'adresaprojektu': new FormControl(projekt.adresaprojektu, Validators.required),
              'ukoncene': new FormControl(projekt.ukoncene)
            })
          )
        }
      }
      if (klient['projektyukoncene']) {
        for (let projekt of klient.projektyukoncene) {
          projektyukoncene.push(
            new FormGroup({
              'nazov': new FormControl(projekt.nazov, Validators.required),
              'popis': new FormControl(projekt.popis, Validators.required),
              'datum': new FormControl(projekt.datum, Validators.required),
              'adresaprojektu': new FormControl(projekt.adresaprojektu, Validators.required),
              'ukoncene': new FormControl(projekt.ukoncene)
            })
          )
        }
      }
    }

    this.klientFormular = new FormGroup({
      'meno' : new FormControl(meno, Validators.required),
      'priezvisko' : new FormControl(priezvisko, Validators.required),
      'adresa' : new FormControl(adresa, Validators.required),
      'telefon' : new FormControl(telefon, Validators.required),
      'email' : new FormControl(email, [Validators.required, Validators.email]),
      'projekty': projekty,
      'projektyukoncene': projektyukoncene
    })
  }

  onSubmit() {
    // const novyKlient = new Klient (
    //   this.klientFormular.value['meno'],
    //   this.klientFormular.value['priezvisko'],
    //   this.klientFormular.value['adresa'],
    //   this.klientFormular.value['telefon'],
    //   this.klientFormular.value['email'],
    //   this.klientFormular.value['projekty'],
    // );
    if (this.editMode) {
      this.klientService.updateKlient(this.id, this.klientFormular.value);
    } else {
      this.klientService.addKlient(this.klientFormular.value);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
    this.klientService.checkProjekt();
  }

  projekt() {
    this.zobraz = !this.zobraz;
  }

  zadatProjekt() {
    (<FormArray>this.klientFormular.get('projekty')).push(
      new FormGroup({
        'nazov': new FormControl(null, Validators.required),
        'popis': new FormControl(null, Validators.required),
        'datum': new FormControl(null, Validators.required),
        'adresaprojektu': new FormControl(null, Validators.required),
        'ukoncene': new FormControl(null)
      })
    )
  }

  zrusit() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
