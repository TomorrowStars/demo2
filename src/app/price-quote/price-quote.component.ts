import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode: string = "IBM";
  stockPrice: number;

  @Output()
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(() => {
      let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
      this.stockPrice = priceQuote.lasePrice;
      this.lastPrice.emit(priceQuote);
    }, 1000);
   }

  ngOnInit() {
  }

}

export class PriceQuote{

  constructor(
    public stockCode: string,
    public lasePrice: number
  ){

  }
}