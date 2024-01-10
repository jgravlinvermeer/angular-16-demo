import { Component } from '@angular/core';
import {interval} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-take-until-destroyed',
  templateUrl: './take-until-destroyed.component.html',
  styleUrls: ['./take-until-destroyed.component.scss']
})
export class TakeUntilDestroyedComponent {
  count: number | undefined;

  constructor() {
    interval(1000).pipe(takeUntilDestroyed(),).subscribe(x => {
      this.count = x;
      console.log(`TakeUntilDestroyed: ${x}`);
    });
  }
}
