import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { signalMethod } from '@ngrx/signals';

@Component({
  selector: 'app-uic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button class="btn btn-primary" (click)="increaseCount()">+</button>
      <span>{{ currentVal() }}</span>
      <button class="btn btn-primary" (click)="decreaseCount()">-</button>
    </div>
  `,
  styles: ``,
})
export class UicComponent {
  currentVal = signal(0);
  turnMe = output<number>();

  increaseCount() {
    this.currentVal.update((a) => a + 1);
    this.turnMe.emit(this.currentVal());
  }
  decreaseCount() {
    this.currentVal.update((a) => (a >= 0 ? +1 : 0));
    this.turnMe.emit(this.currentVal());
  }
}
