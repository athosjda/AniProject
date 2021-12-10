import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public brand: string;

  constructor() {
    this.brand = "Ara-ara Info"
  }

  ngOnInit(): void {
  }

}
