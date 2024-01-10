import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-router-input',
  templateUrl: './router-input.component.html',
  styleUrls: ['./router-input.component.scss']
})
export class RouterInputComponent {
  @Input() data: string;
  @Input() routeParam: string | undefined;
  @Input() queryParam: string | undefined;

  readonly routeParams$ = this.router.params;
  readonly queryParams$ = this.router.queryParams;

  readonly routeParams = toSignal(this.routeParams$);
  readonly queryParams = toSignal(this.queryParams$);

  constructor(private router: ActivatedRoute) { }

  hasProps(x: any): boolean {
    return Object.keys(x).length > 0;
  }
}
