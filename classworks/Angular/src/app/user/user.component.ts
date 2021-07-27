import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  userPosts: IPost[];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getAllPosts().subscribe(value => this.userPosts = value.filter(post=>post.userId === this.user.id))
  }

}
