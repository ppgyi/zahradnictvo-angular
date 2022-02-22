import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {KlientiComponent} from "./klienti.component";
import {AuthGuardService} from "../auth/auth-guard.service";
import {KlinetiStartComponent} from "./klineti-start/klineti-start.component";
import {KlientiEditComponent} from "./klienti-edit/klienti-edit.component";
import {KlientiDetailComponent} from "./klienti-detail/klienti-detail.component";
import {KlientiResolverService} from "../shared/klienti-resolver.service";
import {KlientiProjektEditComponent} from "./klienti-projekt-edit/klienti-projekt-edit.component";

const routes: Routes=[
  {path: '', component: KlientiComponent, canActivate: [AuthGuardService], children: [
      {path: '', component: KlinetiStartComponent},
      {path: 'new', component: KlientiEditComponent},
      {path: ':id', component: KlientiDetailComponent, resolve: [KlientiResolverService]},
      {path: ':id/edit', component: KlientiEditComponent, resolve: [KlientiResolverService]},
      {path: ':id/projekt', component: KlientiProjektEditComponent, resolve: [KlientiResolverService]}
    ]},
]
@NgModule({
  imports:[RouterModule.forChild(routes)]
})
export class KlientiRoutingModule {}
