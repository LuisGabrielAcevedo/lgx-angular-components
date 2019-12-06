import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingComponent } from './loading.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FlexLayoutModule
  ],
  exports: [LoadingComponent]
})
export class LoadingModule { }
