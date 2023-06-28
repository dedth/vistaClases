import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { VotanteListaComponent } from './votantes/votante-lista/votante-lista.component';
import { VotanteComponent } from './votantes/votante/votante.component';
import { CronogramaComponent } from './cronogramas/cronograma/cronograma.component';
import { CronogramaListaComponent } from './cronogramas/cronograma-lista/cronograma-lista.component';
import { AprobarComponent } from './aprobacion/aprobar/aprobar.component';
import { AprobarListaComponent } from './aprobacion/aprobar-lista/aprobar-lista.component';

const routes: Routes = [

 /*  {
    path: '',
    component: VotanteComponent
  }, */
 
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'votante',
    component: VotanteComponent
  },
  {
    path: 'votante-lista',
    component: VotanteListaComponent
  },
  {
    path: 'cronograma',
    component: CronogramaComponent
  },
  {
    path: 'cronograma-lista',
    component: CronogramaListaComponent
  },
  {
    path: 'aprobar',
    component: AprobarComponent
  },
  {
    path: 'aprobar-lista',
    component: AprobarListaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
