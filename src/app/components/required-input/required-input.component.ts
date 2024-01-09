import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-required-input',
  templateUrl: './required-input.component.html',
  styleUrls: ['./required-input.component.scss']
})
export class RequiredInputComponent {
  @Input() title: string;
}
