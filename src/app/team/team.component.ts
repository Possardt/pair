import { Component, Input } from '@angular/core';
import { Team } from '../service/team';
import { NgClass } from '@angular/common';

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
  backgroundColor: string = '';
  colors: Array<string> = [
    'blueBackground'
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
      this.backgroundColor = this.colors[0];
      return;
    }
    this.team.pairs.push([name, this.lastSelected]);
    this.lastSelected = '';
  }

}
