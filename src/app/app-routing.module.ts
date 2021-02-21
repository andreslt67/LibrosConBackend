import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './servicios/guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./Login/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'lista-libros',
    loadChildren: () => import('./lista-libros/lista-libros.module').then( m => m.ListaLibrosPageModule),
    canLoad: [GuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
