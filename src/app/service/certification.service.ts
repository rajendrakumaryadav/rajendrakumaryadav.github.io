import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private certificationUrl = 'assets/data/certifications.json'
  constructor(private httpClient: HttpClient) { }

  getCertifications() {
    return this.httpClient.get(this.certificationUrl);
  }
}
