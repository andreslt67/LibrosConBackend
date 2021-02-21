import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaLibrosPage } from './lista-libros.page';

const routes: Routes = [
  {
    path: '',
    component: ListaLibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaLibrosPageRoutingModule {}
