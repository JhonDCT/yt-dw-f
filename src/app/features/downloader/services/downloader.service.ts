import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GenerateUrlForDownload } from 'src/app/core/entities/download';
import { DownloadService } from 'src/app/core/services/download/download.service';

@Injectable({
  providedIn: 'root',
})
export class DownloaderService {
  constructor(private downloadSVC: DownloadService) { }

  generateUrlForDownload(
    url: string,
    format: string
  ): Observable<GenerateUrlForDownload> {
    return this.downloadSVC.generateUrlForDownload(url, format).pipe(
      map((result: GenerateUrlForDownload) => {
        const path = new URLSearchParams(result.path)
          .toString()
          .replace('=', '');

        return { ...result, path: path };
      })
    );
  }

  download(path: string): Observable<any> {
    return this.downloadSVC.download(path).pipe(map(res => {
      console.log(res);

      return res;
    }));
  }

  initDownload(url: string): Observable<string> {
    return this.downloadSVC.initDownload(url).pipe(map((result: { path: string }) => result.path));
  }

  getFile(path: string): Observable<any> {
    return this.downloadSVC.getFiles(path);
  }
}
