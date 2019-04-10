import { Component } from '@angular/core';
import { User } from './address/user.model';
import { TestService } from './test.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directives';

  user : User;
  inputText : String = "initialText";
  constructor(private svc : TestService,private http: HttpClient){

    this.user = new User();
    this.user.name = "manojkumar Velama";
    this.user.surname = "velama";
    this.user.address = "2814 Ventana Dr Coraopolis,PA,15108";
    this.user.phone = ['123-456-7890', '929-394-8304'];
    svc.printToConsole("Congrats!!!!")
  }

  ngOnInit(){

    // let obs = this.http.get('https://api.github.com/users/vmanoj003');

    // obs.subscribe((response) => console.log(response) );
  }
}
