import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
