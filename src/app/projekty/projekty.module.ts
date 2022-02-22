import {NgModule} from "@angular/core";

import {ProjektyStartComponent} from "./projekty-start/projekty-start.component";
import {ProjektyDetailComponent} from "./projekty-detail/projekty-detail.component";
import {ProjektyListComponent} from "./projekty-list/projekty-list.component";
import {ProjektyItemComponent} from "./projekty-list/projekty-item/projekty-item.component";
import {ProjektyEditComponent} from "./projekty-edit/projekty-edit.component";
import {ProjektyComponent} from "./projekty.component";
import {SharedModule} from "../shared/shared.module";
import {ProjektyRoutingModule} from "./projekty-routing.module";

@NgModule({
  declarations:[
    ProjektyComponent,
    ProjektyStartComponent,
    ProjektyDetailComponent,
    ProjektyListComponent,
    ProjektyItemComponent,
    ProjektyEditComponent,
  ],
  imports:[
    SharedModule,
    ProjektyRoutingModule
  ]
})
export class ProjektyModule {}
