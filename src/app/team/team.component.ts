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

}
