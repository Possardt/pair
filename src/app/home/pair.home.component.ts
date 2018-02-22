import { Component, OnInit } from '@angular/core';
import { PairService } from '../service/pair.service';
import { DayInfo } from '../service/DayInfo';
import { MomentModule } from 'angular2-moment/moment.module';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'pair-home',
  templateUrl: './pair.home.html',
  styleUrls: ['./pair.home.css'],
  providers: [PairService]
})
export class PairComponent {
  dayInfo : DayInfo;

  constructor(private pairService : PairService){}

  getPairs() {
    this.pairService.getTodaysPairs().subscribe(pairs => this.dayInfo = pairs);
  }

  ngOnInit() {
    this.getPairs();
  }
}
