import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user/user.model';
import { Router } from '@angular/router';


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

  constructor(private _auth: AuthenticationService, private fb: FormBuilder, private _router: Router) {
    this.myForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  registerUser(newUser) {
    this.username = newUser.username;
    this.password = newUser.password;

    console.log(newUser);

    this._auth.registerUser(newUser)
      .subscribe(
        res => {
          console.log(res);
          // Save token in local storage
          localStorage.setItem('token', res.token);
          // Go to login component
          this._router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }

  ngOnInit() {
  }

}
