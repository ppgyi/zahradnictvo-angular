import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {KlientService} from "./klient.service";
import {Klient} from "./klient.model";
import {map, tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageDataService {
  loading = new Subject<boolean>();

  constructor(private http: HttpClient,
              private klientService: KlientService) { }

  vytvorenieAUlozenieDat() {
    const klienti = this.klientService.getKlient();
    // this.http.put('https://ng-projekt-zahradnictvo-default-rtdb.firebaseio.com/klienti.json', klienti)
    //   .subscribe(responseData => {console.log (responseData)})
    this.http.post('http://localhost:8080/klienti', klienti)
      .subscribe(responseData => {console.log (responseData)})
  }

  nacitanieDat() {
    this.loading.next(true);
    // return this.http.get<Klient[]>('https://ng-projekt-zahradnictvo-default-rtdb.firebaseio.com/klienti.json')
    //   .pipe(
    //     map(klienti => {
    //     return klienti.map(klient => {
    //       return {...klient, projekty: klient.projekty ? klient.projekty : [],
    //         projektyukoncene: klient.projektyukoncene ? klient.projektyukoncene : []}
    //     });
    //   }),
    //     tap(klienti => {
    //       this.klientService.nahrajKlientov(klienti);
    //       this.loading.next(false);
    //     })
    //   )
    return this.http.get<Klient[]>('http://localhost:8080/klienti')
      .pipe(
        map(klienti => {
          return klienti.map(klient => {
            return {...klient, projekty: klient.projekty ? klient.projekty : [],
              projektyukoncene: klient.projektyukoncene ? klient.projektyukoncene : []}
          });
        }),
        tap(klienti => {
          this.klientService.nahrajKlientov(klienti);
          this.loading.next(false);
        })
      )
  }
}
