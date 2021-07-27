import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServicesService} from "../services/services.service";
import {IUser} from "../models/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private service: ServicesService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.service.getUserById(id).subscribe(value => this.user = value)
    })
  }

  ngOnInit(): void {
  }

}
