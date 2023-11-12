import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceData: any;
  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getExperienceData().subscribe(data => {
      this.experienceData = data;
    });
  }

}
