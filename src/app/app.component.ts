import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myAppFireBaseLogin';

  navItems: any;

  constructor(
    private router: Router
  ) {

  }

   async ngOnInit() {
  //   this.navItems = [
  //     { name: 'sign-up', label: 'Sign Up', icon: 'list' },
  //     { name: 'login', label: 'Login', icon: 'history' },
  //     { name: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  //   ];
   }


  // handlechangeMenu = async (item: any) => {
  //   debugger;
  //   this.router.navigateByUrl('/' + item);
  // };
}
