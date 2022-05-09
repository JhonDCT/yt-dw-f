import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DownloadService } from './services/download/download.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [DownloadService],
})
export class CoreModule {}
