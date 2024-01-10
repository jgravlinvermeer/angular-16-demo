import {Component, DestroyRef} from '@angular/core';
import {interval} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-take-until-destroyed',
  styleUrls: ['./take-until-destroyed.component.scss'],
  template: `
    <h2>takeUntilDestroyed</h2>
    <p>Count: {{ count }}</p>
  `,
})
export class TakeUntilDestroyedComponent {
  count: number | undefined;

  constructor(destroyRef: DestroyRef) {
    destroyRef.onDestroy(() => {
      console.log('TakeUntilDestroyedComponent Destroyed')
    });

    interval(1000).pipe(takeUntilDestroyed()).subscribe(x => {
      this.count = x;
      console.log(`TakeUntilDestroyed: ${x}`);
    });
  }
}
