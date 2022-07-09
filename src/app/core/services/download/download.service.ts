import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenerateUrlForDownload } from '../../entities/download';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  private host = environment.downloadHost;
  private urls = {
    generateUrlForDownload: `${this.host}/generate-path-download`,
    download: `${this.host}/download`,
  };

  constructor(private http: HttpClient) {}

  generateUrlForDownload(
    url: string,
    format: string
  ): Observable<GenerateUrlForDownload> {
    const request = {
      params: {
        url: url,
        format: format,
      },
    };

    return this.http.get(this.urls.generateUrlForDownload, request).pipe(
      map((result: any) => {
        const response = new GenerateUrlForDownload({
          host: this.host,
          path: result?.path,
          url: this.urls.download,
        });

        return response;
      }),
      catchError(err => {
        return throwError(() => err);
      })
    );
  }

  download(path: string): Observable<any> {
    const request = {
      params: {
        path: path,
      },
    };

    return this.http.get(this.urls.download, request);
  }
}
