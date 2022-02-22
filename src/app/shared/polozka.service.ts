import { Subject } from "rxjs";

import {Polozka} from './polozka.model';

export class PolozkaService {
  polozkaZmenena = new Subject<Polozka[]>();
  polozkaNaEdit = new Subject<number>();

  private polozky: Polozka[] = [];

  nahrajPolozky(polozky: Polozka[]) {
    this.polozky = polozky;
    this.polozkaZmenena.next(this.polozky.slice());
  }

  getPolozka() {
    return this.polozky.slice();
  }

  getPolozkaNaEdit(index: number) {
    return this.polozky[index];
  }

  addPolozka(polozka: Polozka) {
    this.polozky.push(polozka);
    this.polozkaZmenena.next(this.polozky.slice());
  }

  upravenaPolozka(index: number, samotnaPolozka: Polozka) {
    this.polozky[index] = samotnaPolozka;
    this.polozkaZmenena.next(this.polozky.slice());
  }

  odstranitPolozku(index: number) {
    this.polozky.splice(index, 1);
    this.polozkaZmenena.next(this.polozky.slice());
  }
}
