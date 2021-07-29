import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";
import {IPost} from "../../models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPost[];
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getAllPosts().subscribe(value => this.posts = value)
  }

}
