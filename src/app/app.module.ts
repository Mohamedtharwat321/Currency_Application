import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ConvertCardComponent } from './Components/convert-card/convert-card.component';
import { CurrencyDropdownComponent } from './Components/currency-dropdown/currency-dropdown.component';
import { CompareCardComponent } from './Components/compare-card/compare-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CurrencyComponent } from './Components/currency/currency.component';
import { LiveExecComponent } from './Components/live-exec/live-exec.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatCardModule } from '@angular/material/card';
import { FavCurrComponent } from './Components/fav-curr/fav-curr.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from './material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    ConvertCardComponent,
    ConvertCardComponent,
    CurrencyDropdownComponent,
    CompareCardComponent,
    CurrencyComponent,
    LiveExecComponent,
    FavCurrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatSlideToggleModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
