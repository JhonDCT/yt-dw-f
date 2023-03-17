import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DownloaderService } from '../../services/downloader.service';

@Component({
  selector: 'app-downloader-container',
  templateUrl: './downloader-container.component.html',
  styleUrls: ['./downloader-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloaderContainerComponent implements OnInit {
  currentUrl$!: Observable<string>;

  files$!: Observable<any>;
  constructor(
    private downloaderSVC: DownloaderService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.files$ = this.downloaderSVC.getFile('files');
  }

  onDownloadV2(): void {
    this.http.get('http://localhost:3000/file-v2').subscribe();
  }

  onGetLinks({ url }: { url: string }): void {
    // this.currentUrl$ = this.generateUrl(url, format);

    this.currentUrl$ = this.downloaderSVC.initDownload(url);
  }

  onDownload(path: string): void {
    this.currentUrl$ = this.downloaderSVC.download(path);
  }

  showFile(file: any): void {
    console.log(file);
  }

  private generateUrl(url: string, format: string): Observable<string> {
    return this.downloaderSVC
      .generateUrlForDownload(url, format)
      .pipe(map(result => `${result.url}?path=${result.path}`));
  }
}
