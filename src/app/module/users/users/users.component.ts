import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  userProfileId: any
  userAlbumId: any
  users_list = []
  album_list = []
  photos_list = []
  public searchForm = false
  searchText: string
  constructor(private httpClient: HttpClient) {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users/").subscribe(
      success => {
        this.users_list = success as any
      }
    )
  }
  ngOnInit() {

  }
  onSubmitUserDetails(x) {

    this.httpClient.get("https://jsonplaceholder.typicode.com/albums/").subscribe(
      success => {
          this.album_list = success as any
          console.log(x)
          console.log(this.album_list)
          //if ( this.album_list == x ) {
            /*for (let i = 0; i < this.album_list.length; i++) {
              console.log(this.album_list[i])
            }*/
      }
    )
  }
  onSubmitAlbum(a) {
    this.httpClient.get("https://jsonplaceholder.typicode.com/photos/").subscribe(
      success => {
        this.photos_list = success as any
      }
    )
  }
  getUserProfileId(param) {
    this.userProfileId = param
  }
  getAlbumId(p) {

    this.userAlbumId = p
  }
  closeSearch() {
    this.searchForm = false
  }
  deleteSearch() {
    this.searchText = ''
    this.searchForm = false
  }
}
