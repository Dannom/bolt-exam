import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-task-bolt';

  constructor(private router: Router) {}

  public onListViewClick() {
    this.router.navigate(['list-view'])
  }

  public onThumbViewClick() {
    this.router.navigate(['thumb-view'])
  }
}
