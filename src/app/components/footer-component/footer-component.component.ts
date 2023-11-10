import { Component, OnInit } from '@angular/core';
import { BuildTimeService } from 'src/app/build-time.service';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
  buildTime: string = '';
  constructor(private buildTimeService: BuildTimeService) { }

  ngOnInit(): void {
    this.buildTime = this.buildTimeService.getBuildTime();
  }

}
