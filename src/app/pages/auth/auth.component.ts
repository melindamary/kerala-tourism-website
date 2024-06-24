import { Component } from '@angular/core';
import { SignupComponent } from '../../components/signup/signup.component';
import { LoginComponent } from '../../components/login/login.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SignupComponent,LoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  showLogin:boolean = true;

  toggleView():void{
    this.showLogin = !this.showLogin;
  }
}
