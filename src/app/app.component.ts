import { Component } from '@angular/core';
import { JadeSnapComponent } from "./jade-snap/jade-snap.component";
import { AlbaSnapComponent } from './alba-snap/alba-snap.component';

@Component({
  selector: 'app-root',
  imports: [JadeSnapComponent, AlbaSnapComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}