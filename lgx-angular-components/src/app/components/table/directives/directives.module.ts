import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoPaginationDirective } from './auto-pagination/auto-pagination.directive';
import { ShowIndexDirective } from './show-index/show-index.directive';
import { MobileDirective } from './mobile/mobile.directive';
import { DarkDirective } from './dark/dark.directive';
import { SelectRowComponentDirective } from './select-row-component/select-row-component.directive';
import { ExpandRowsDirective } from './expand-rows/expand-rows.directive';
import { InfiniteScrollDirective } from './infinite-scroll/infinite-scroll.directive';

@NgModule({
  declarations: [
    AutoPaginationDirective,
    ShowIndexDirective,
    MobileDirective,
    DarkDirective,
    SelectRowComponentDirective,
    ExpandRowsDirective,
    InfiniteScrollDirective],
  imports: [
    CommonModule
  ],
  exports: [
    AutoPaginationDirective,
    ShowIndexDirective,
    MobileDirective,
    DarkDirective,
    SelectRowComponentDirective,
    ExpandRowsDirective]
})
export class TableDirectivesModule { }
