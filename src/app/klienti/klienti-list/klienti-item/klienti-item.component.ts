import {Component, Input, OnInit} from '@angular/core';

import {Klient} from '../../../shared/klient.model';

@Component({
  selector: 'app-klienti-item',
  templateUrl: './klienti-item.component.html',
  styleUrls: ['./klienti-item.component.css']
})
export class KlientiItemComponent implements OnInit {
  @Input() klient!: Klient;
  @Input() index!: number;

  ngOnInit(): void {
  }
}
