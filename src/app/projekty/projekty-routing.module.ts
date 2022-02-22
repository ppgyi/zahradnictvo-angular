import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {ProjektyComponent} from "./projekty.component";
import {AuthGuardService} from "../auth/auth-guard.service";
import {ProjektyStartComponent} from "./projekty-start/projekty-start.component";
import {ProjektyEditComponent} from "./projekty-edit/projekty-edit.component";
import {ProjektyDetailComponent} from "./projekty-detail/projekty-detail.component";
import {KlientiResolverService} from "../shared/klienti-resolver.service";

const routes: Routes=[
  {path: '', component: ProjektyComponent, canActivate: [AuthGuardService], children: [
      {path: '', component: ProjektyStartComponent},
      {path: 'new', component: ProjektyEditComponent},
      {path: ':id/klient/:id2', component: ProjektyDetailComponent, resolve: [KlientiResolverService]},
      {path: ':id/klient/:id2/edit', component: ProjektyEditComponent, resolve: [KlientiResolverService]}
    ]},
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
})
export class ProjektyRoutingModule {}
