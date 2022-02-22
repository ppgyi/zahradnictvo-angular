import {Component, OnDestroy, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {Klient} from "../../shared/klient.model";
import {KlientService} from "../../shared/klient.service";
import {Subscription} from "rxjs";
import {StorageDataService} from "../../shared/storage-data.service";

@Component({
  selector: 'app-projekty-list',
  templateUrl: './projekty-list.component.html',
  styleUrls: ['./projekty-list.component.css']
})
export class ProjektyListComponent implements OnInit, OnDestroy {
  klienti: Klient[] = [];
  subscription!: Subscription;
  loading = false;
  loadSub!: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private klientService: KlientService,
              private storageService: StorageDataService) { }

  ngOnInit(): void {
    this.subscription = this.klientService.klientZmena.subscribe(
      (klienti: Klient[]) => {
        this.klienti= klienti;
      }
    );
    this.klienti = this.klientService.getKlient();
    this.loadSub = this.storageService.loading.subscribe(loading => {
      this.loading = loading;
    });
  }

  NovyProjekt() {
    this.router.navigate(['/klienti'])
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.loadSub.unsubscribe();
  }
}
