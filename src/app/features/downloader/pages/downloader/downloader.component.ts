import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Download } from 'src/app/core/entities/download';
import { DownloaderService } from '../../services/downloader.service';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.scss'],
})
export class DownloaderComponent {
  form: FormGroup;
  currentFileDownload!: Download;
  currentUrl!: string;
  hasAudio: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private downloaderSVC: DownloaderService
  ) {
    this.form = this.createForm();
    this.hasAudio = false;
  }

  onGetLinks(): void {
    this.clean();
    const { url } = this.form.value;

    this.downloaderSVC.getFormats(url).subscribe({
      next: result => {
        this.currentFileDownload = result;
      },
      error: err => {
        console.error(err);
      },
    });
  }

  onSelectOption(event: any) {
    const value = event.target.value;
    this.currentUrl = value;
  }

  private clean(): void {
    this.currentUrl = '';
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      url: ['', Validators.required],
    });
  }
}
