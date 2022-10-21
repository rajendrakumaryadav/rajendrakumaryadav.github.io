import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private titleService: Title) {
    this.titleService.setTitle('Personal Portfolio - Rajendra Kumar Yadav - Under Construction');
  }

  ngOnInit (): void {
  }

}
