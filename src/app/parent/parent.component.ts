import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild("child1")
  child1:ChildComponent;



  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.child1.greeting("Tom");
    }, 5000);
  }

  ngAfterViewInit() {
    console.log("父组件的视图初始化完毕。")
    
  }
  ngAfterViewChecked() {
    console.log("父组件的视图变更检测完毕。")
    
  }

}
