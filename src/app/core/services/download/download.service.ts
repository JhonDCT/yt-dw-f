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
  private api = environment.api;
  private urls = {
    generateUrlForDownload: `${this.host}/generate-path-download`,
    download: `${this.api}/download-file`,
    initDownload: `${this.api}/download`
  };

  constructor(private http: HttpClient) { }

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

  download(name: string): Observable<any> {
    const url = `${this.urls.download}?name=${name}`;

    return this.http.get(url);
  }

  initDownload(url: string): Observable<any> {
    const request = {
      url
    }

    return this.http.post(this.urls.initDownload, request);
  }

  getFiles(path: string): Observable<any> {
    return this.http.get(`${this.api}/get-files?path=${path}`);
  }
}
