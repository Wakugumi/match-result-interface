import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esport-scoreboard';

  scores = [
    {team : "Team Liquid", kill : 12},
    {team : "Team Nigma", kill : 11},
    {team : "Team Secret", kill : 8},
    {team : "FlyTotheMoon", kill : 7},
    {team : "OG", kill : 5},
    {team : "Team Liquid", kill : 12},
    {team : "Team Nigma", kill : 11},
    {team : "Team Secret", kill : 8},
    {team : "FlyTotheMoon", kill : 7},
    {team : "OG", kill : 5}
  ]
}
