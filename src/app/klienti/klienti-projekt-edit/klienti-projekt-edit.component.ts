import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {KlientService} from "../../shared/klient.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Klient} from "../../shared/klient.model";

@Component({
  selector: 'app-klienti-projekt-edit',
  templateUrl: './klienti-projekt-edit.component.html',
  styleUrls: ['./klienti-projekt-edit.component.css']
})
export class KlientiProjektEditComponent implements OnInit {
  klient!: Klient;
  id!: number;
  novyProjektForm!: FormGroup;

  constructor(private klientServise: KlientService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.klient = this.klientServise.getKlientid(this.id);
      }
    );

    this.novyProjektForm = new FormGroup({
        'nazov': new FormControl(null, Validators.required),
        'popis': new FormControl(null, Validators.required),
        'datum': new FormControl(null, Validators.required),
        'adresaprojektu': new FormControl(null, Validators.required),
        'ukoncene': new FormControl(null)
    })
  }

  onSubmit() {
    this.klientServise.addProjekt(this.id, this.novyProjektForm.value);
    this.router.navigate(['../'], {relativeTo: this.route});
    this.klientServise.checkProjekt();
  }

  zrusit() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
