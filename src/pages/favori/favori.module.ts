import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriPage } from './favori';

@NgModule({
  declarations: [
    FavoriPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoriPage),
  ],
})
export class FavoriPageModule {}
