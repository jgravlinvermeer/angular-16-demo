import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-child.component.html',
  styleUrls: ['./standalone-child.component.scss']
})
export class StandaloneChildComponent {

}
