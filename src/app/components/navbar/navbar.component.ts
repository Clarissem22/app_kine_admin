import { Component, OnInit } from '@angular/core';

export interface Lien {
  name:string;
  routerLink:string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  liens: Lien[] = [

    {name:'Home' , routerLink: "/home"},
    {name:'Programme' , routerLink: "/programme"},
    {name:'Exercice' , routerLink: "/exercices"},
    {name:'Profil' , routerLink: "/profil"},
    {name:'Contact' , routerLink: "/contact"},
    {name:'Parametre' , routerLink: "/parametres"},
    {name:'Login' , routerLink: "/login"},
    // {linkProgramme = "programme"},
    // {linkExercice = "exercice"},
    // {linkProfil = "profil"},
    // {linkContact = "contact"},
    // {linkParametre = "parametre"},
    // {linkLogin = "login"},
    ];
}
