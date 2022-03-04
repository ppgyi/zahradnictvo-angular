import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";

import {PolozkaService} from "../shared/polozka.service";
import {Polozka} from "../shared/polozka.model";

@Injectable({providedIn: 'root'})
export class StoragePolozkyService {

  constructor(private http: HttpClient,
              private polozkaService: PolozkaService) {}

  vytvorenieAUlozenieDat() {
    const polozky = this.polozkaService.getPolozka();
    // this.http.put('https://ng-projekt-zahradnictvo-default-rtdb.firebaseio.com/polozky.json', polozky)
    //   .subscribe(responseData => {console.log (responseData)})
    this.http.post('http://localhost:8080/polozky', polozky)
      .subscribe(responseData => {console.log (responseData)})
  }

  nacitanieDat() {
    // return this.http.get<Polozka[]>('https://ng-projekt-zahradnictvo-default-rtdb.firebaseio.com/polozky.json')
    //   .pipe(
    //     tap(polozky => {
    //       this.polozkaService.nahrajPolozky(polozky)
    //     })
    //   )
    return this.http.get<Polozka[]>('http://localhost:8080/polozky')
      .pipe(
        tap(polozky => {
          this.polozkaService.nahrajPolozky(polozky)
        })
      )
  }
}
