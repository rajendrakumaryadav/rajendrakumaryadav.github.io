import { Component, OnInit } from '@angular/core';
import { BuildTimeService } from '../build-time.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  buildTime: string = '';
  constructor(private buildTimeService: BuildTimeService) { }

  ngOnInit(): void {
    this.buildTime = this.buildTimeService.getBuildTime();
  }

}
