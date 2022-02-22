import {Klient} from './klient.model';
import {Projekt} from "./projekt.model";
import {Subject} from "rxjs";

export class KlientService {
  klientZmena = new Subject<Klient[]>();

  // private klienti: Klient[]= [
  //   new Klient('Jozef','Mrkva','BB, Bern 84, 974 01','0902 123 456', 'joz.mrk@gmail.com',
  //     [new Projekt('Poniky', 'Vysadba ziveho plotu','11.10.2021','Poniky 352', false)],
  //     [new Projekt('Test', 'Vysadba ziveho plotu','11.10.2021','Poniky 352', true)]),
  //   new Klient('Adam','Trala','BB, Fon 11, 974 31','0908 123 456', 'tralala@gmail.com',
  //     [new Projekt('Test', 'Svadobna kytica, ruze','11.10.2021','Poniky 352', false)],
  //     [new Projekt('Kytica','Svadobna kytica, ruze','12.30.2021','BB, Tatr 56', true)])
  // ];

  private klienti: Klient[]=[];

  nahrajKlientov(klienti: Klient[]) {
    this.klienti = klienti;
    this.klientZmena.next(this.klienti.slice());
  }

  getKlient() {
    return this.klienti.slice();
  }

  getKlientid(index: number) {
    return this.klienti[index];
  }

  addKlient(klient: Klient) {
    this.klienti.push(klient);
    this.klientZmena.next(this.klienti.slice());
  }

  updateKlient(index: number, novyKlient: Klient) {
    this.klienti[index] = novyKlient;
    this.klientZmena.next(this.klienti.slice());
  }

  deleteKlient(index: number) {
    this.klienti.splice(index, 1);
    this.klientZmena.next(this.klienti.slice());
  }

  addProjekt(index: number, projekt: Projekt){
    this.klienti[index].projekty.push(projekt);
    this.klientZmena.next(this.klienti.slice());
  }

  checkProjekt() {
    for (let klient of this.klienti){
      if (klient['projekty']){
        const noveprojekty: Projekt[] = [];
        for (let projekt of klient.projekty) {
          if (projekt.ukoncene === true) {
            klient.projektyukoncene.push(projekt);
          } else {
            noveprojekty.push(projekt);
          };
        };
        klient.projekty = noveprojekty;
      };
    };
    this.klientZmena.next(this.klienti.slice());
  }

  getProjektid(index: number, index2: number) {
    return this.klienti[index2].projekty[index];
  }

  updateProjekt(index: number, index2: number, novyProjekt: Projekt) {
    this.klienti[index2].projekty[index] = novyProjekt;
    this.klientZmena.next(this.klienti.slice());
  }
}
