import { Component, OnInit } from '@angular/core';
import { EducationService } from '../service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationalData: any;
  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.getEducationData().subscribe(data => {
      this.educationalData = data;
    });
  }
}
