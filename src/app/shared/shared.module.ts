import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {HeaderComponent} from "../header/header.component";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";
import {DropdownDirective} from "./dropdown.directive";

@NgModule({
  declarations:[
    HeaderComponent,
    LoadingSpinnerComponent,
    DropdownDirective
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent,
    LoadingSpinnerComponent,
    DropdownDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule {}
