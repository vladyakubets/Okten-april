import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { UserComponent } from './components/users/user/user.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';

let routes: Routes = [
  {
    path: "posts", component:PostsComponent, children: [
      {path: ":id", component: PostDetailsComponent}
    ]
  },
  {
    path: "users", component:UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    UserComponent,
    UserDetailsComponent,
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
