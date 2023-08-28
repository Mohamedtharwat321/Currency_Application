import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Currency } from 'src/app/interfaces/Icurruncey';
import { GetcurrencyService } from 'src/app/Services/getcurrency.service';

@Component({
  selector: 'popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.scss']
})
export class PopupCardComponent implements OnInit {
// @ViewChild('checkBox') checkBox:any
@ViewChild('myInput') myInput: any;

myFave!:any;
public currencyList: Currency[] = [ {
  code: "USD",
 name: "US Dollar",
 flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
},
{
  code: "EUR",
  name: "Euro",
  flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
},
{
  code: "GBP",
  name: "Sterling Pound",
  flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
},
{
  code: "AED",
  name: "UAE Dirham",
  flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
},
{
  code: "BHD",
  name: "Bahrain Dinar",
  flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
},
{
  code: "JPY",
  name: "Japan Yen",
  flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
},
{
  code: "KWD",
  name: "Kuwait Dinar",
  flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
},
{
  code: "OMR",
  name: "Oman Riyal",
  flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
},
{
  code: "QAR",
  name: "Qatari Riyal",
  flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
},
{
  code: "SAR",
  name: "Saudi Riyal",
  flag_url: "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
}];

ngOnInit(): void {
}

  checkInputProperty() {
    // // Access the input element using ViewChild and ElementRef
    // const inputElement = this.myInput.nativeElement;
    // console.log(inputElement.value);
    

    // // Check properties of the input element
    // if (inputElement.value) {
    //   console.log('Input value is: ' + inputElement.value);
    //   localStorage.setItem('myFav',inputElement.value)
    // } else {
    //   console.log('Input is empty');
    // }

  //   // You can also check other properties like disabled, readonly, etc.
  //   if (inputElement.disabled) {
  //     console.log('Input is disabled');
  //   } else {
  //     console.log('Input is not disabled');
  // }
  
}

}
