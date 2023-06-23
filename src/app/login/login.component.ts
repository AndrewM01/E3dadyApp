import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  hide = true;
  rememberMe: boolean = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('',[Validators.required]);
  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
      this.authService.login(this.emailFormControl.value ,this.passwordFormControl.value);
  }
}
