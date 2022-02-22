import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from "rxjs";

import {Polozka} from '../../shared/polozka.model';
import {PolozkaService} from "../../shared/polozka.service";


@Component({
  selector: 'app-nakupny-zoznam-edit',
  templateUrl: './nakupny-zoznam-edit.component.html',
  styleUrls: ['./nakupny-zoznam-edit.component.css']
})
export class NakupnyZoznamEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') polozkaForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  polozkaIndex!: number;
  polozkaNaEdit!: Polozka;

  constructor(private polozkaService: PolozkaService) { }

  ngOnInit(): void {
    this.subscription = this.polozkaService.polozkaNaEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.polozkaIndex = index;
        this.polozkaNaEdit = this.polozkaService.getPolozkaNaEdit(index);
        this.polozkaForm.setValue({
          nazov: this.polozkaNaEdit.nazov,
          pocet: this.polozkaNaEdit.pocet
        })
      }
    );
  }

  pridat(form: NgForm) {
    const value = form.value;
    const novaPolozka = new Polozka(value.nazov, value.pocet);
    if (this.editMode) {
      this.polozkaService.upravenaPolozka(this.polozkaIndex, novaPolozka)
    } else {
     this.polozkaService.addPolozka(novaPolozka)
    }
    this.editMode = false;
    form.reset();
  }
  vymazatPolia() {
    this.polozkaForm.reset();
    this.editMode = false;
  }
  odstranitPolozku() {
    this.polozkaService.odstranitPolozku(this.polozkaIndex);
    this.vymazatPolia();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
