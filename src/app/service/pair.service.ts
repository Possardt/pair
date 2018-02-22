import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DayInfo } from './dayInfo'

@Injectable()
export class PairService {

  constructor(private http: HttpClient) { }

  private pairsUrl = '/api/todaysPairs';
  getTodaysPairs (): Observable<DayInfo> {
    return this.http.get<DayInfo>(this.pairsUrl)
  }

}
