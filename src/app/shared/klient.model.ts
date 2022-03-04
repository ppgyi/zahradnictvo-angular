import {Projekt} from "./projekt.model";

export class Klient {
  public meno: string;
  public priezvisko: string;
  public adresa: string;
  public telefon: string;
  public email: string;
  public projekty: Projekt[];
  public projektyukoncene: Projekt[];

  constructor(m: string, p: string, a: string, t: string, e: string, pr: Projekt[], pru: Projekt[]){
    this.meno= m;
    this.priezvisko= p;
    this.adresa= a;
    this.telefon= t;
    this.email= e;
    this.projekty= pr;
    this.projektyukoncene = pru;
  }
}
