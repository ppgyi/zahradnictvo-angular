export class Projekt {
  public nazov: string;
  public popis: string;
  public datum: string;
  public adresaprojektu: string;
  public ukoncene: boolean;

  constructor(n: string, p: string, d: string, a: string, u: boolean){
    this.nazov= n;
    this.popis= p;
    this.datum= d;
    this.adresaprojektu= a;
    this.ukoncene= u;
  }
}
