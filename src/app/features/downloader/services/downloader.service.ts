import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Download } from 'src/app/core/entities/download';
import { DownloadService } from 'src/app/core/services/download/download.service';

@Injectable({
  providedIn: 'root',
})
export class DownloaderService {
  constructor(private downloadSVC: DownloadService) {}

  getFormats(url: string): Observable<Download> {
    return this.downloadSVC.getFormats(url);
  }
}
