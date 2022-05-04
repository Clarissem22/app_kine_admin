import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logo!:string;

  constructor(private auth: AuthService, 
              private router: Router) { }

  ngOnInit(): void {
    this.logo = "../assets/img/logologin.png";
  }

  onLogin(): void {
    this.auth.login();
    this.router.navigateByUrl('/home')
  }

  toInscription():void {
    this.router.navigateByUrl('/inscription');
  }
}
