import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public isLoggedIn = false;

  constructor(public auth: AngularFireAuth, private router: Router) {}
  async login(email: any, password: any) {
     this.auth.signInWithEmailAndPassword(email, password).then(
      (user) => {
        localStorage.setItem('token', 'true');
        if (user.user?.uid == '4AFgABAogaRy0g44KhQMjKfon7f2') {
          this.router.navigate(['/admin']);
        } else this.router.navigate(['/home']);
        this.isLoggedIn=true

      },
      (err) => {
        alert("Enter Your Email/Password");
        this.router.navigate(['/login']);
      }
    );
  }

  logout() {
    this.auth.signOut().then(
      () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userUID');
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
