import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {UsersWithPostsComponent} from './users-with-posts/users-with-posts.component';

let routes: Routes = [
  {path: 'users-with-posts', component: UsersWithPostsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersWithPostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
