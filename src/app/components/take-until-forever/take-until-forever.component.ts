import {Component, DestroyRef} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-take-until-forever',
  styleUrls: ['./take-until-forever.component.scss'],
  template: `
    <h2>takeUntil<s>Destroyed</s> Forever</h2>
    <p>Count: {{ count }}</p>
  `,
})
export class TakeUntilForeverComponent {
  count: number | undefined;

  constructor(destroyRef: DestroyRef) {
    destroyRef.onDestroy(() => {
      console.log('TakeUntilForeverComponent Destroyed')
    });

    interval(1000).subscribe(x => {
      this.count = x;
      console.log(`TakeUntilForever: ${x}`);
    });
  }
}
