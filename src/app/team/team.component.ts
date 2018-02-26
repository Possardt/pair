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

  findAndRemovePair(name){
    for(let i = 0; i < this.team.pairs.length; i++){
      if(this.team.pairs[i].indexOf(name) !== -1){
        return this.team.pairs.splice(i, 1)[0];
      }
    }
    return false;
  }

  selectDeveloper(name){
    if(name === this.lastSelected) return;

    //initial state
    if(!this.lastSelected){
      this.lastSelected = name;
      //only pop backgroundColor if you need to.
      this.currentColor = this.currentColor || this.backgroundColors.pop();
      this.nameToBackgroundColor[name] = this.currentColor;
      return;
    }
    else if(this.lastSelected !== name){

      //check if the person is already paired with someone else
      // if he/she is, remove that pair and add the color back to be
      // used again.
      let existingPair = this.findAndRemovePair(name);
      if(existingPair){
        console.log(existingPair);
        let dev1 = existingPair[0];
        let dev2 = existingPair[0];
        let color = this.nameToBackgroundColor[dev1];
        this.backgroundColors.push(color);
        this.nameToBackgroundColor[dev1] = '';
        this.nameToBackgroundColor[dev2] = '';
        this.nameToBackgroundColor[name] = this.currentColor;
      }
      this.team.pairs.push([name, this.lastSelected]);
      this.nameToBackgroundColor[name] = this.currentColor;
      this.lastSelected = '';
      this.currentColor = this.backgroundColors.pop();

      console.log(this.backgroundColors);
    }
    //addPairs

  }

}
