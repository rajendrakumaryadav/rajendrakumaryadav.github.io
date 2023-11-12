import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BuildTimeService } from '../service/build-time.service';


@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buildTime: string = '';
  constructor (private titleService: Title, private buildTimeService: BuildTimeService) {
    this.titleService.setTitle('Rajendra Kumar R Yadav - Portfolio');
  }

  ngOnInit(): void {
    this.buildTime = this.buildTimeService.getBuildTime();
   }
}
