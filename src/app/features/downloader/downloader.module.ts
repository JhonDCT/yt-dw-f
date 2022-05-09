import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/pipes/shared.module';
import { DownloaderRoutingModule } from './downloader-routing.module';
import { DownloaderComponent } from './pages/downloader/downloader.component';
import { DownloaderService } from './services/downloader.service';

@NgModule({
  declarations: [DownloaderComponent],
  imports: [
    CommonModule,
    DownloaderRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [DownloaderService],
})
export class DownloaderModule {}
