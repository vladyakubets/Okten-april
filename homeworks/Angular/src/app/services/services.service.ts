import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/user";
import {IPost} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users'
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.usersUrl);
  }

  getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(this.usersUrl + "/" + id);
  }

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.postsUrl);
  }

  getPostById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(this.postsUrl + "/" + id);
  }
}
