import {NgModule} from "@angular/core";

import {KlientiComponent} from "./klienti.component";
import {KlientiListComponent} from "./klienti-list/klienti-list.component";
import {KlientiItemComponent} from "./klienti-list/klienti-item/klienti-item.component";
import {KlientiDetailComponent} from "./klienti-detail/klienti-detail.component";
import {KlinetiStartComponent} from "./klineti-start/klineti-start.component";
import {KlientiEditComponent} from "./klienti-edit/klienti-edit.component";
import {KlientiProjektEditComponent} from "./klienti-projekt-edit/klienti-projekt-edit.component";
import {FilterKlientPipe} from "./klienti-list/klienti.pipe";
import {SharedModule} from "../shared/shared.module";
import {KlientiRoutingModule} from "./klienti-routing.module";

@NgModule({
  declarations:[
    KlientiComponent,
    KlientiListComponent,
    KlientiItemComponent,
    KlientiDetailComponent,
    KlinetiStartComponent,
    KlientiEditComponent,
    KlientiProjektEditComponent,
    FilterKlientPipe
  ],
  imports:[
    SharedModule,
    KlientiRoutingModule
  ]
})
export class KlientiModule { }
