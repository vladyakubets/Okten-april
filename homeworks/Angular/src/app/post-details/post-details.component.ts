import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServicesService} from "../services/services.service";
import {IPost} from "../models/post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private service: ServicesService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.service.getPostById(id).subscribe(value => this.post = value)
    })
  }
  ngOnInit(): void {
  }

}
