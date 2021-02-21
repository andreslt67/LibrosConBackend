import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaLibrosPageRoutingModule } from './lista-libros-routing.module';

import { ListaLibrosPage } from './lista-libros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaLibrosPageRoutingModule
  ],
  declarations: [ListaLibrosPage]
})
export class ListaLibrosPageModule {}
