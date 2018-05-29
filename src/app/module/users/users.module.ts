import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe }from './users/filter.pipe';




@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AngularFontAwesomeModule,
    HttpClientModule

  ],
  declarations: [UsersComponent, FilterPipe],
  exports: [UsersComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }
