import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

testdata: any;
  usernameFormControl: FormControl;
  passwordFormControl: FormControl;
  constructor() {
    this.usernameFormControl = new FormControl('', [Validators.required]);
    this.passwordFormControl = new FormControl('', [Validators.required]);
  }

  handleSubmitOnClick() {
    var auth = firebase.auth();
    return auth
      .createUserWithEmailAndPassword(this.usernameFormControl.value, this.passwordFormControl.value)
      .then((result) => {
        debugger;
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
       // this.SetUserData(result.user);
       this.testdata = result.user;
       console.log(this.testdata.email);
       alert(this.testdata.uid);
       window.location.href = "/login";
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  
  // SetUserData(user: any) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(
  //     `users/${user.uid}`
  //   );
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified,
  //   };
  //   return userRef.set(userData, {
  //     merge: true,
  //   });
  // }
}
