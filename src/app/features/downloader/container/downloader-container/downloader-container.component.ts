import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DownloaderService } from '../../services/downloader.service';

@Component({
  selector: 'app-downloader-container',
  templateUrl: './downloader-container.component.html',
  styleUrls: ['./downloader-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloaderContainerComponent {
  currentUrl$!: Observable<string>;

  constructor(private downloaderSVC: DownloaderService) {}

  onGetLinks({ url, format }: { url: string; format: string }): void {
    console.log('on-get-links');

    this.currentUrl$ = this.generateUrl(url, format);
  }

  private generateUrl(url: string, format: string): Observable<string> {
    return this.downloaderSVC
      .generateUrlForDownload(url, format)
      .pipe(map(result => `${result.url}?path=${result.path}`));
  }
}
