import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }