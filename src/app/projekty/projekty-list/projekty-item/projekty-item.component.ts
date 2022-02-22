import {Component, Input, OnInit} from '@angular/core';

import {Projekt} from '../../../shared/projekt.model';

@Component({
  selector: 'app-projekty-item',
  templateUrl: './projekty-item.component.html',
  styleUrls: ['./projekty-item.component.css']
})
export class ProjektyItemComponent implements OnInit {
  @Input() projekt!: Projekt;
  @Input() index!: number;
  @Input() index2!: number;

  ngOnInit(): void {
  }
}
