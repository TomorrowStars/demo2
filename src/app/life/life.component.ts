import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy, SimpleChanges, Input } from '@angular/core';

let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  name: string;

  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`)
  }

  constructor() {
    this.logIt("name屬性在Constructor里的值是：" + name);
   }

  ngOnInit() {
    this.logIt("ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    let name = changes['name'].currentValue;
    this.logIt("name属性在ngOnchanges里的值是：" + name);
  }

  ngOnDestroy(): void {
    this.logIt("ngOnDestroy");
  }
  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }
  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }




}
