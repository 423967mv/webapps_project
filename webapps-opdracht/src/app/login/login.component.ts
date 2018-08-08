import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user/user.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  loginUser(newUser) {
    this.username = newUser.username;
    this.password = newUser.password;

    console.log(newUser);

    this._auth.loginUser(newUser)
      .subscribe(
        res => {
          console.log(res);
          // Save token in local storage
          localStorage.setItem('token', res.token);
          // Go to admin component
          this._router.navigate(['/admin']);
        },
        error => console.log(error)
      );
  }

  ngOnInit() {
  }

}
