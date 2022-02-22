import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import {Klient} from "./klient.model";
import {StorageDataService} from "./storage-data.service";
import {KlientService} from "./klient.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class KlientiResolverService implements Resolve<Klient[]> {

  constructor (private storage: StorageDataService,
               private klientService: KlientService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const klienti = this.klientService.getKlient();

    if(klienti.length === 0) {
      return this.storage.nacitanieDat();
    } else {
      return klienti;
    }
  }
}
