import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text.component';

@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule
  ],
  exports: [TextComponent],
  entryComponents: [TextComponent]
})
export class TextModule { }
