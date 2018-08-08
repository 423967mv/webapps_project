import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  username: String;
  password: String;
  newUser: User;

  constructor(private _auth: AuthenticationService, private fb: FormBuilder) {
    this.myForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  registerUser(newUser) {
    this.username = newUser.username;
    this.password = newUser.password;

    console.log(this.username);
    console.log(this.password);
    console.log(newUser);

    this._auth.registerUser(newUser)
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      );
  }

  ngOnInit() {
  }

}
