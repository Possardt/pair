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
  backgroundColors: Array<string> = [
    'blueBackground',
    'greenBackground'
    // 'pinkBackground',
    // 'redBackground'
  ];
  lastSelected: string = '';
  currentColor: string = '';
  nameToBackgroundColor : Object = {};

  getNameClass(name) {
    return this.nameToBackgroundColor[name];
  }

  // setNameColor(name) {
  //   console.log(this.nameToBackgroundColor);
  //   this.nameToBackgroundColor[name] = this.currentColor;
  // }

  getInitials(name){
    return name
      .split(' ')
      .map(n => n.charAt(0))
      .join('');
  }

  selectDeveloper(name){
    if(name === this.lastSelected) return;

    if(!this.lastSelected){
      this.lastSelected = name;
      this.currentColor = this.backgroundColors.pop();
      this.nameToBackgroundColor[name] = this.currentColor;
      return;
    }
    else if(this.lastSelected !== name){
      this.team.pairs.push([name, this.lastSelected]);
      this.nameToBackgroundColor[name] = this.currentColor;
      this.lastSelected = '';
      this.currentColor = this.backgroundColors.pop();
      console.log(this.backgroundColors);
    }
    //addPairs

  }

}
