import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch:'full'},
  {path: 'auth', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path: 'klienti', loadChildren:()=>import('./klienti/klienti.module').then(m=>m.KlientiModule)},
  {path: 'projekty', loadChildren:()=>import('./projekty/projekty.module').then(m=>m.ProjektyModule)},
  {path: 'nakupnyzoznam', loadChildren:()=>import('./nakupny-zoznam/nakupny-zoznam.module').then(m=>m.NakupnyZoznamModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
