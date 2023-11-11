import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private httpClient: HttpClient) { }

  getEducationData() {
    return this.httpClient.get('assets/data/educational.json');
  }
}
