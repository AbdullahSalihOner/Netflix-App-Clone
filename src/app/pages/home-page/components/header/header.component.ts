import { Component, Input } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({required: true}) userImg: string = '';
  username = "Talha Alataş";
  
  constructor(private auth : AuthService, private _router:Router){}
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"]

  signOut(){
    this.auth.signOut();
    this._router.navigate(['/login']);
  }
}
