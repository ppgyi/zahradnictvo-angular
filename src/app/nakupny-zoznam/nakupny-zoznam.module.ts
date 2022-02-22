import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {NakupnyZoznamComponent} from "./nakupny-zoznam.component";
import {NakupnyZoznamEditComponent} from "./nakupny-zoznam-edit/nakupny-zoznam-edit.component";
import {SharedModule} from "../shared/shared.module";
import {AuthGuardService} from "../auth/auth-guard.service";

@NgModule({
  declarations:[
    NakupnyZoznamComponent,
    NakupnyZoznamEditComponent,
  ],
  imports:[
    SharedModule,
    RouterModule.forChild([
      {path: '', component: NakupnyZoznamComponent, canActivate: [AuthGuardService]}
    ])
  ]
})
export class NakupnyZoznamModule {}
