import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logo!:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logo = "../assets/img/logologin.png";
  }

  onLogin(): void {
    this.router.navigateByUrl('/home')
  }

  toInscription():void {
    this.router.navigateByUrl('/inscription');
  }
}
