import { Component, OnInit } from '@angular/core';
import { PairService } from './pair.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PairService]
})
export class AppComponent {
  title = 'app';
  something = 'hey';

  constructor(private pairService : PairService){}

  getPairs() {
    this.pairService.getPairs().subscribe(pairs => console.log(pairs));
  }

  ngOnInit() {
    this.getPairs();
  }
}
