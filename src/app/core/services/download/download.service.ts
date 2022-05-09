import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Download } from '../../entities/download';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  private host = environment.downloadHost;
  private urls = {
    downloadGetFormats: `${this.host}/download`,
  };

  constructor(private http: HttpClient) {}

  getFormats(url: string): Observable<Download> {
    const request = {
      params: {
        url: url,
      },
    };

    return this.http.get(this.urls.downloadGetFormats, request).pipe(
      map(result => {
        return result as Download;
      }),
      catchError(err => {
        return throwError(() => err);
      })
    );
  }
}
