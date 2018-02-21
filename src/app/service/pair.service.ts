import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PairInfo } from './pairInfo'

@Injectable()
export class PairService {

  constructor(private http: HttpClient) { }

  private pairsUrl = '/api/todaysPairs';
  getPairs (): Observable<PairInfo> {
    return this.http.get<PairInfo>(this.pairsUrl)
  }

}
