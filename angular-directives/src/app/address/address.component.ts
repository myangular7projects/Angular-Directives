import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {


  
  //@Input("name")userName : String
  @Input('user') user : User;
  isCollapsed : boolean = true;

  constructor() { 
  }

  toggleCollapse(){

    this.isCollapsed=!this.isCollapsed;
  }
  ngOnInit() {
  }

}
