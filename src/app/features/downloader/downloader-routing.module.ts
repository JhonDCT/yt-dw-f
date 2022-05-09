import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloaderComponent } from './pages/downloader/downloader.component';

const routes: Routes = [
  {
    path: '',
    component: DownloaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloaderRoutingModule {}
