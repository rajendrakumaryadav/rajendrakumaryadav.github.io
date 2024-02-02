import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imagePath: String;
  constructor() {
    this.imagePath = 'assets/images/profile.jpeg';
  }

  ngOnInit(): void {
  }

}
