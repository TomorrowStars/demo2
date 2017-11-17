import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild("child1")
  child1:ChildComponent;



  constructor() { }

  ngOnInit() {
    this.child1.greeting("Tom");
  }

}
