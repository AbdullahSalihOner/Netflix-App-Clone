import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private _router: Router, private _authService:AuthService) { }

  goToRegister() {
    this._router.navigateByUrl("/register")
  }

  goToLogin() {
    this._router.navigateByUrl("/login")
  }

  goToMainPage() {
    location.reload();
  }
    
}
