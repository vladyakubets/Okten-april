import { Component, OnInit } from '@angular/core';
import {MainService} from "../../services/main.service";
import {IUser} from "../../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser[];
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getAllUsers().subscribe(value => this.users = value)
  }

}
