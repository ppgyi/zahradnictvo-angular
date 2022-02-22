import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";

import {KlientService} from "./shared/klient.service";
import {PolozkaService} from "./shared/polozka.service";

@NgModule({
  providers:[
    KlientService,
    PolozkaService,
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true}
  ]
})
export class CoreModule {}
