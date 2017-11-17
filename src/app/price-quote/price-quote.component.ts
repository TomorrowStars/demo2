import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode: string = "IBM";
  stockPrice: number;

  @Output("priceChange")
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();
  
  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(() => {
      let priceQuote1: PriceQuote = new PriceQuote(this.stockCode, 100 * Math.random());
      this.stockPrice = priceQuote1.lasePrice;
      this.lastPrice.emit(priceQuote1);
    }, 1000);
   }

  ngOnInit() {
  }

  buyStock(event){
    this.buy.emit(new PriceQuote(this.stockCode, this.stockPrice));
  }


}

export class PriceQuote{

  constructor(
    public stockCode: string,
    public lasePrice: number
  ){

  }
}