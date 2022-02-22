import {Component, OnDestroy, OnInit} from '@angular/core';

import {Klient} from '../../shared/klient.model';
import {KlientService} from '../../shared/klient.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {StorageDataService} from "../../shared/storage-data.service";

@Component({
  selector: 'app-klienti-list',
  templateUrl: './klienti-list.component.html',
  styleUrls: ['./klienti-list.component.css']
})
export class KlientiListComponent implements OnInit, OnDestroy {
  klienti!: Klient[];
  subscription!: Subscription;
  filteredStatus = '';
  loading = false;
  loadSub!: Subscription;

  constructor(private klientService: KlientService,
              private router: Router,
              private route: ActivatedRoute,
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

  NovyKlient() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.loadSub.unsubscribe();
  }
}
