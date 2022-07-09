import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/pipes/shared.module';
import { DownloaderRoutingModule } from './downloader-routing.module';
import { DownloaderService } from './services/downloader.service';
import { DownloaderComponent } from './components/downloader/downloader.component';
import { DownloaderContainerComponent } from './container/downloader-container/downloader-container.component';

@NgModule({
  declarations: [DownloaderContainerComponent, DownloaderComponent],
  imports: [
    CommonModule,
    DownloaderRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [DownloaderService],
})
export class DownloaderModule {}
