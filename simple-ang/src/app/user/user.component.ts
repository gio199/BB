import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({  
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: Object;
  
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getUsers().subscribe(data => {
      this.userList = data
      console.log(this.userList);
    })
  }

}