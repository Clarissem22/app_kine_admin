import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cdk-accordion',
  templateUrl: './cdk-accordion.component.html',
  styleUrls: ['./cdk-accordion.component.scss']
})
export class CdkAccordionComponent implements OnInit {

  items = ['FAQ', 'Contact Kiné', 'Aides et Associations', 'Contactez-nous', 'Faire un Don'];
  expandedIndex = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
