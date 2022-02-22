import {Component, OnDestroy, OnInit} from '@angular/core';

import {Polozka} from '../shared/polozka.model';
import {PolozkaService} from "../shared/polozka.service";
import {Subscription} from "rxjs";
import {StoragePolozkyService} from "./storage-polozky.service";

@Component({
  selector: 'app-nakupny-zoznam',
  templateUrl: './nakupny-zoznam.component.html',
  styleUrls: ['./nakupny-zoznam.component.css']
})
export class NakupnyZoznamComponent implements OnInit, OnDestroy {
  polozky!: Polozka[];
  private polozkaSubscription!: Subscription;

  constructor(private polozkaService: PolozkaService,
              private storage: StoragePolozkyService) { }

  ngOnInit(): void {
    this.polozky = this.polozkaService.getPolozka();
    this.polozkaSubscription = this.polozkaService.polozkaZmenena.subscribe(
      (polozky: Polozka[]) => {
        this.polozky = polozky;
      }
    )
  }
  upravitPolozku(i: number) {
    this.polozkaService.polozkaNaEdit.next(i)
  }

  ngOnDestroy(): void {
    this.polozkaSubscription.unsubscribe()
  }

  ulozitZoznam() {
    this.storage.vytvorenieAUlozenieDat()
  }

  nacitatZoznam() {
    this.storage.nacitanieDat().subscribe();
  }
}
