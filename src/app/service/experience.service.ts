import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceUrl: string = "assets/data/experience.json"

  constructor(private http: HttpClient) { }

  getExperienceData(): Observable<any> {
    return this.http.get(this.experienceUrl);
  }
}
