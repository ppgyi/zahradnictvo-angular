import {Component, OnInit} from '@angular/core';

import {Projekt} from '../../shared/projekt.model';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {KlientService} from "../../shared/klient.service";
import {Klient} from "../../shared/klient.model";

@Component({
  selector: 'app-projekty-detail',
  templateUrl: './projekty-detail.component.html',
  styleUrls: ['./projekty-detail.component.css']
})
export class ProjektyDetailComponent implements OnInit {
  projekt!: Projekt;
  klient!: Klient;
  id!: number;
  id2!: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private klientService: KlientService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.id2 = +params['id2'];
        this.projekt = this.klientService.getProjektid(this.id, this.id2);
        this.klient = this.klientService.getKlientid(this.id2);
      }
    )
  }

  UpravitProjekt() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
