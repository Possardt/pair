import { Component, OnInit } from '@angular/core';
import { PairService } from '../service/pair.service';
import { PairInfo } from '../service/pairInfo';
import { MomentModule } from 'angular2-moment/moment.module';

@Component({
  selector: 'pair-home',
  templateUrl: './pair.home.html',
  styleUrls: ['./pair.home.css'],
  providers: [PairService]
})
export class PairComponent {
  todaysPairs : PairInfo;

  constructor(private pairService : PairService){}

  getPairs() {
    this.pairService.getPairs().subscribe(pairs => this.todaysPairs = pairs);
  }

  ngOnInit() {
    this.getPairs();
  }
}
