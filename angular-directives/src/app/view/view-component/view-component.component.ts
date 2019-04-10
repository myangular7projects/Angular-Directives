import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  gitUrl: String = "";
  response : any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getResponse(){

    this.http.get('https://api.github.com/users/'+this.gitUrl).subscribe((response) => { this.response = response;console.log(this.response);})

     

  }

}
