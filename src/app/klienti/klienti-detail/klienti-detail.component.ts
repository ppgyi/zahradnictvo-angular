import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Klient} from '../../shared/klient.model';
import {KlientService} from '../../shared/klient.service';

@Component({
  selector: 'app-klienti-detail',
  templateUrl: './klienti-detail.component.html',
  styleUrls: ['./klienti-detail.component.css']
})
export class KlientiDetailComponent implements OnInit {
  klient!: Klient;
  id!: number;

  constructor(private route: ActivatedRoute,
              private klientService: KlientService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.klient = this.klientService.getKlientid(this.id);
      }
    )
  }

  UpravitKlienta() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  zadatProjekt() {
    this.router.navigate(['projekt'], {relativeTo: this.route});
  }

  VymazatKlienta() {
    this.klientService.deleteKlient(this.id);
    this.router.navigate(['/klienti']);
  }

  DoZoznamu() {
    this.router.navigate(['/nakupnyzoznam']);
  }
}
