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

  isExpired(validityTill: string): boolean {
    const currentDate = new Date();
    if (validityTill === 'N/A') return false; // Not expired if there's no validity date
    const validityDate = new Date(validityTill);
    return currentDate > validityDate;
  }
}
