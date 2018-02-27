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
    'greenBackground',
    'pinkBackground',
    'redBackground'
  ];
  lastSelected: string = '';
  currentColor: string = '';
  nameToBackgroundColor : Object = {};

  getNameClass(name) {
    return this.nameToBackgroundColor[name];
  }

  getInitials(name){
    return name
      .split(' ')
      .map(n => n.charAt(0))
      .join('');
  }

  checkForAndDeleteExistingPair(name){
    for(let i = 0; i < this.team.pairs.length; i++){
      if(this.team.pairs[i].indexOf(name) !== -1){
        let pair = this.team.pairs.splice(i, 1)[0];
        let color = this.nameToBackgroundColor[pair[0]];
        this.nameToBackgroundColor[pair[0]] = '';
        this.nameToBackgroundColor[pair[1]] = '';
        this.backgroundColors.push(color);
        return;
      }
    }
    return false;
  }

  selectDeveloper(name){
    if(name === this.lastSelected) return;

    this.checkForAndDeleteExistingPair(name);
    if(!this.lastSelected){
      this.lastSelected = name;
      this.currentColor = this.currentColor || this.backgroundColors.pop();
      this.nameToBackgroundColor[name] = this.currentColor;
      return;
    }
    else if(this.lastSelected !== name){
      this.team.pairs.push([name, this.lastSelected]);
      this.nameToBackgroundColor[name] = this.currentColor;
      this.lastSelected = '';
      this.currentColor = this.backgroundColors.pop();
      return;
    }
  }

}
