import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export enum ButtonState {
  LOADING = 'LOADING',
  INITIAL = 'INITIAL',
  SUCCESS = 'SUCCESS',
}

export class DownloaderPresenter {
  currentUrl!: string;
  urlControl = new FormControl('');
  formatControl = new FormControl('');
  private generateUrl: Subject<{ url: string }> = new Subject();
  generateUrl$: Observable<{ url: string }> =
    this.generateUrl.asObservable();
  private buttonState: BehaviorSubject<ButtonState> =
    new BehaviorSubject<ButtonState>(ButtonState.INITIAL);
  buttonState$: Observable<ButtonState> = this.buttonState.asObservable();

  getLinks(): void {
    const url = this.urlControl.value.trim();

    if (url) {
      this.generateUrl.next({ url });
      this.buttonState.next(ButtonState.LOADING);
    }
  }

  updateButtonState(currentUrl: string): void {
    if (currentUrl) {
      this.buttonState.next(ButtonState.SUCCESS);
    }
  }

  changeState(): void {
    this.buttonState.next(ButtonState.INITIAL);
  }

  cleanUrl(): void {
    this.currentUrl = '';
  }

  destroy(): void {
    this.generateUrl.complete();
  }
}
