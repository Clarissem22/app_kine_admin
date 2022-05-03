import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  logo!:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logo = "../assets/img/logologin.png";
  }

  toInscription():void {
    this.router.navigateByUrl('/home');
  }
}
