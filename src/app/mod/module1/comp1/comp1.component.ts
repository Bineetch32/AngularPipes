import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {




  name: string = "Welcome to AngularPipe";
  todayDate: Date = new Date();
  weeks: string[] = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];
  mjson = {
    id: 1,
    name: "CJC",
    Addr: "KARVENAGAR"
  };
  q: number = 9;



  constructor() { }


  ngOnInit(): void {
    // Initialize any necessary data or perform any setup logic here
  }
}
