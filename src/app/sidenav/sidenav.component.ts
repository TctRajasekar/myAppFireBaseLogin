import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navItems: any;
  sidenav!: MatSidenav;

  constructor(private router: Router) {

  }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  async ngOnInit() {
      this.navItems = [
        { name: 'sign-up', label: 'Sign Up', icon: 'list' },
        { name: 'login', label: 'Login', icon: 'history' },
        { name: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
      ];
     }

     handlechangeMenu = async (item: any, index: any) => {
    debugger;
    this.router.navigateByUrl(item);
  };


}
