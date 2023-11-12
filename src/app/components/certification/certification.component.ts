import { Component, OnInit } from '@angular/core';
import { CertificationService } from "../../service/certification.service";

@Component({
    selector: 'app-certification',
    templateUrl: './certification.component.html',
    styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
    certificationData: any;
    constructor(private certificationService: CertificationService) {
    }

   ngOnInit(): void {
    this.certificationService.getCertifications().subscribe((data: any) => {
      this.certificationData = data;
    });
  }

}
