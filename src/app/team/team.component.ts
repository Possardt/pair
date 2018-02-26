import { Component, Input } from '@angular/core';
import { Team } from '../service/team';

@Component({
  selector: 'team-info',
  templateUrl: './team.html',
  styleUrls: ['./team.css'],
  providers: []
})
export class TeamComponent {
  @Input() team: Team;
  show: boolean = false;
  lastSelected: string = '';
  colors: array = [
    'rgba(0,255,0,0.4)', //lime
    'rgba(0,0,255,0.4)', //blue
    'rgba(0,255,255,0.4)' //aqua
  ];

  getInitials(name){
    return name
      .split(' ')
      .map(n => n.charAt(0))
      .join('');
  }

  setPair(name){
    if(!this.lastSelected || name === this.lastSelected){
      this.lastSelected = name;
      return;
    }
    this.team.pairs.push([name, this.lastSelected]);
    this.lastSelected = '';
  }

}
