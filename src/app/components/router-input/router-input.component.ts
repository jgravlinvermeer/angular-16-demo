import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-router-input',
  templateUrl: './router-input.component.html',
  styleUrls: ['./router-input.component.scss']
})
export class RouterInputComponent {
  @Input() data: string;
}
