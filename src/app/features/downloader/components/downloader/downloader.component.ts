import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DownloaderPresenter } from '../../presenter/downloader.presenter';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DownloaderPresenter],
})
export class DownloaderComponent implements OnInit, OnDestroy, OnChanges {
  @Input() currentUrl!: string | null;
  @Output() getLinksSubmit: EventEmitter<{ url: string }> =
    new EventEmitter();
  @Output() downloadClick = new EventEmitter();

  urlControl: FormControl = this.presenter.urlControl;
  formatControl: FormControl = this.presenter.formatControl;
  buttonState$: Observable<string> = this.presenter.buttonState$;

  constructor(private presenter: DownloaderPresenter) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (this.currentUrl) {
        this.presenter.currentUrl = this.currentUrl;
        this.presenter.updateButtonState(this.currentUrl);
      }
    }
  }

  ngOnInit(): void {
    this.presenter.generateUrl$.subscribe(({ url }) =>
      this.getLinksSubmit.emit({ url })
    );
  }

  ngOnDestroy(): void {
    this.presenter.destroy();
  }

  onGetLinks(): void {
    this.presenter.getLinks();
  }

  onChangeState(): void {
    // this.presenter.changeState();
    this.downloadClick.emit(this.currentUrl);
  }
}
