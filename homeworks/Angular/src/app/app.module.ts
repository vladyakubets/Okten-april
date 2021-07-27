import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './user/user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {PostDetailsComponent} from './post-details/post-details.component';

let routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    children: [{path: ":id", component: UserDetailsComponent}]
  },
  {
    path: "posts",
    component: PostsComponent,
    children: [{path: ":id", component: PostDetailsComponent}]
  }]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
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
