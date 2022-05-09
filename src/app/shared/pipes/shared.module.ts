import { NgModule } from '@angular/core';
import { FormatPipe } from './format.pipe';

@NgModule({
  declarations: [FormatPipe],
  exports: [FormatPipe],
})
export class SharedModule {}
