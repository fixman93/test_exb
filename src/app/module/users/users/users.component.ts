import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users_list = []
  album_list = []
  photos_list = []
  constructor(private httpClient: HttpClient) {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users/").subscribe(
      success => {
        //console.log("Successfully Completed");
        //console.log(success);
        this.users_list = success as any;
      }
    );
  }

  ngOnInit() {

  }

  onSubmitUserDetails(x) {
    this.httpClient.get("https://jsonplaceholder.typicode.com/albums/").subscribe(
      success => {
        //console.log("Successfully Completed");
        //console.log(success);
        //console.log(x);
        //if(x.id == success.userId) {
          this.album_list = success as any
        //}
        //for(let i = 0; i < success[0].length; i++) {
        //}
      }
    );
  }

  onSubmitAlbum(a) {
    this.httpClient.get("https://jsonplaceholder.typicode.com/photos/").subscribe(
      success => {
        //console.log("Successfully Completed");
        console.log(success);
        //console.log(x);
        //if(x.id == success.userId) {
        this.photos_list = success as any
        /*toggleEditable(event) {
          if ( event.target.checked ) {
              this.contentEditable = true;

            }
          }*/
        //}
        //for(let i = 0; i < success[0].length; i++) {
        //}
      }
    );
  }
  public searchForm = false;
  closeSearch() {
    this.searchForm = false;
  }


}
