
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usernameFormControl: FormControl;
  passwordFormControl: FormControl;
  constructor() {
    this.usernameFormControl = new FormControl('', [Validators.required]);
    this.passwordFormControl = new FormControl('', [Validators.required]);
  }

  handleSubmitOnClick() {
    var auth = firebase.auth();
    auth.signInWithEmailAndPassword(this.usernameFormControl.value, this.passwordFormControl.value)
      .then(function () {
        window.location.href = "/dashboard";

      })
      .catch( (error: { code: any; message: any; }) => {
        // Handle Errors here.
        var errorCode = error.code;
        if (errorCode === 'auth/user-not-found') {
          alert("user-not-found");
          this.usernameFormControl.setValue('');
          this.passwordFormControl.setValue('');
        } else if (errorCode === 'auth/wrong-password') {
          alert("wrong-password");
          this.usernameFormControl.setValue('');
          this.passwordFormControl.setValue('');
        }

      });
  }
}
