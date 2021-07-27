import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../services/services.service";
import {IPost} from "../models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPost[]
  constructor(private services: ServicesService) { }

  ngOnInit(): void {

    this.services.getAllPosts().subscribe(value => this.posts=value);
  }

}
