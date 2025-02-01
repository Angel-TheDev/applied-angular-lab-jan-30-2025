import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { signalMethod } from '@ngrx/signals';

@Component({
  selector: 'app-couter-lab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div>Counter stuff</div>
    <a class="link" routerLink="uic-component"> UIC </a>
    <router-outlet />
  `,
  styles: ``,
})
export class CounterLabComponent {}
