import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StandaloneChildComponent} from "./standalone-child/standalone-child.component";

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, StandaloneChildComponent],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent {

}
