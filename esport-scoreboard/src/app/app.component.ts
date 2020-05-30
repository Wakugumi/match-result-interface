import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esport-scoreboard';

  scores = [
    {team : "Team Liquid", kill : 12, death: 4},
    {team : "Team Nigma", kill : 11, death: 2},
    {team : "Team Secret", kill : 8, death: 8},
    {team : "FlyTotheMoon", kill : 7, death: 5},
    {team : "OG", kill : 5, death: 12}
  ]
}
