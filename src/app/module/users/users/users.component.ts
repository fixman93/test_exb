import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  userProfileId: any;
  userAlbumId: any;
  users_list = []
  album_list = []
  photos_list = []
  constructor(private httpClient: HttpClient) {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users/").subscribe(
      success => {
        this.users_list = success as any;
      }
    );
  }
  ngOnInit() {

  }
  onSubmitUserDetails() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/albums/").subscribe(
      success => {
          this.album_list = success as any
      }
    );
  }
  onSubmitAlbum(a) {
    this.httpClient.get("https://jsonplaceholder.typicode.com/photos/").subscribe(
      success => {
        this.photos_list = success as any
      }
    );
  }
  getUserProfileId(param) {
    this.userProfileId = param;
  }
  getAlbumId(p) {
    console.log(p);
    this.userAlbumId = p;
  }
  public searchForm = false;
  closeSearch() {
    this.searchForm = false;
  }
}
