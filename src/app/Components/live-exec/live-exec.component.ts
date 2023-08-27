import { Component, OnInit} from '@angular/core';
import { Currency } from 'src/app/interfaces/Icurruncey';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';

@Component({
  selector: 'app-live-exec',
  templateUrl: './live-exec.component.html',
  styleUrls: ['./live-exec.component.scss']
})
export class LiveExecComponent implements OnInit{
  myFave!:any;
    public currencyList: Currency[] = [];
    
    constructor(
      private currencyservice: GetcurrencyService,
    ) {}
    ngOnInit(): void {
     this.myFave = localStorage.getItem('myFav')
      // this.getCurrencyList();
    }
    getCurrencyList() {
      this.currencyservice.getCurrency().subscribe((result: any) => {
        this.currencyList = result;
        console.log(result);
      });
    }
}
