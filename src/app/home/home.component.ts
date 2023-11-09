import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BuildTimeService } from '../build-time.service';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buildTime: string = '';
  constructor (private titleService: Title, private buildTimeService: BuildTimeService) {
    this.titleService.setTitle('Personal Portfolio - Rajendra Kumar Yadav - Under Construction');
  }

  ngOnInit(): void {
    this.buildTime = this.buildTimeService.getBuildTime();
   }
}
