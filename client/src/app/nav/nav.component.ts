import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
//import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  // private accountService = inject(AccountService);
  // loggedIn = false;
  accountService = inject(AccountService);
  private router = inject(Router);

  model: any = {};

  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/members');
        // console.log(response);
        // this.loggedIn = true;
      },
      error: (error) => console.log(error),
    });
  }

  logout() {
    // this.loggedIn = false;
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
