import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private siteHeader = 'Administrator tools';

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

}
