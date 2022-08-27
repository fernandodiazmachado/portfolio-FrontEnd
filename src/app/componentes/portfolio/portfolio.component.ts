import { Component, OnInit } from '@angular/core';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  stateUser: any;
  registeres: any;
  constructor() {}

  ngOnInit(): void {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.stateUser = user;
      } else {
        this.stateUser = user;
      }
    });
  }
}
