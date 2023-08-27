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
    public currencyList: Currency[] = [ {
      code: "USD",
     name: "US Dollar",
      flag_url: "https://images.app.goo.gl/SCEhKz395RdLUXUJ9"
    },
    {
      code: "EUR",
      name: "Euro",
      flag_url: "https://images.app.goo.gl/NkNaQdTSG9gDVAP98"
    },
    {
      code: "GBP",
      name: "Sterling Pound",
      flag_url: "https://images.app.goo.gl/KcZfVo8g4qSA7hLs7"
    },
    {
      code: "AED",
      name: "UAE Dirham",
      flag_url: "https://images.app.goo.gl/YwhCFXpdL1dgHriS9"
    },
    {
      code: "BHD",
      name: "Bahrain Dinar",
      flag_url: "https://images.app.goo.gl/Fn1bnJrYcMHgeqkAA"
    },
    {
      code: "JPY",
      name: "Japan Yen",
      flag_url: "https://images.app.goo.gl/CYm1odeXcNdgMJck9"
    },
    {
      code: "KWD",
      name: "Kuwait Dinar",
      flag_url: "https://images.app.goo.gl/CUyA7dP6iq7gbbc17"
    },
    {
      code: "OMR",
      name: "Oman Riyal",
      flag_url: "https://images.app.goo.gl/KZp9EgUSyJg2fkHJ6"
    },
    {
      code: "QAR",
      name: "Qatari Riyal",
      flag_url: "https://images.app.goo.gl/pPCMT54fkxeXrmvn9"
    },
    {
      code: "SAR",
      name: "Saudi Riyal",
      flag_url: "https://images.app.goo.gl/qP5B9xY1yf5BY7mSA"
    }];
    
    constructor(
      private currencyservice: GetcurrencyService,
    ) {
    }
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
    public childData($event:any):void{
      console.log($event);
    }
}
