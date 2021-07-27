import { Component, OnInit } from '@angular/core';
import {IUser} from "../models/user";
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[]
  constructor(private services: ServicesService) { }

  ngOnInit(): void {

    this.services.getAllUsers().subscribe(value => this.users=value);
  }

}
