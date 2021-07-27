import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {IUser} from "../models/IUser";

@Component({
  selector: 'app-users-with-posts',
  templateUrl: './users-with-posts.component.html',
  styleUrls: ['./users-with-posts.component.scss']
})
export class UsersWithPostsComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value)
  }

}
