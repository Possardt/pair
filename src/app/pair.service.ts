import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PairService {

  constructor(private http: HttpClient) { }

  private pairsUrl = '/api/todaysPairs';
  getPairs (): Observable<Object> {
    return this.http.get<Object>(this.pairsUrl)
  }

}
