import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PopupCardComponent } from './popup-card/popup-card/popup-card.component';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';


export interface favData {
  icon: string;
  cur: string;
} 

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  public currencyList = [];
  
  constructor(
    private currencyservice: GetcurrencyService,
  ) {}
  ngOnInit(): void {
    this.getCurrency();
  }
  getCurrency(){
    this.currencyservice.getCurrency().subscribe((result :any)=>{
      this.currencyList = result;
      console.log(result);
    })
  }
}

