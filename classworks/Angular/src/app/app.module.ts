import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {UsersWithPostsComponent} from './users-with-posts/users-with-posts.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from './post/post.component';

let routes: Routes = [
  {path: 'users-with-posts', component: UsersWithPostsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersWithPostsComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
