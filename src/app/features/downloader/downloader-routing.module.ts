import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloaderContainerComponent } from './container/downloader-container/downloader-container.component';

const routes: Routes = [
  {
    path: '',
    component: DownloaderContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloaderRoutingModule {}
