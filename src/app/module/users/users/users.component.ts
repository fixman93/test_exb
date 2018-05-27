import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users_list = []
  constructor(private httpClient: HttpClient) {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users/").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
        this.users_list = success as any;
      }
    );
  }

  ngOnInit() {

  }


  public searchForm = false;
  closeSearch() {
    this.searchForm = false;
  }


}
