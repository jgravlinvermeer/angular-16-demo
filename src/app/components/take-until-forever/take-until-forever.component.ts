import { Component } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-take-until-forever',
  templateUrl: './take-until-forever.component.html',
  styleUrls: ['./take-until-forever.component.scss']
})
export class TakeUntilForeverComponent {
  count: number | undefined;

  constructor() {
    interval(1000).subscribe(x => {
      this.count = x;
      console.log(`TakeUntilForever: ${x}`);
    });
  }
}
