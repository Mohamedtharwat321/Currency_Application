import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const MaterialComponents = [
  MatTabsModule,
  MatButtonToggleModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports : [
    MaterialComponents
  ]
})
export class MaterialModule { }
