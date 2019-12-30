import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MultiActionsComponent } from './table-components/multi-actions/multi-actions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableDirectivesModule } from './directives/directives.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TextModule } from './row-components/text/text.module';
import { ButtonModule } from './row-components/button/button.module';
import { AvatarModule } from './row-components/avatar/avatar.module';
import { ImageModule } from './row-components/image/image.module';
import { SelectRowComponent } from './table-components/select-row-component/select-row-component.component';
import { RowDialogComponent } from './table-components/row-dialog/row-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from './table-components/loading/loading.module';
import { PaginatorModule } from './table-components/paginator/paginator.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TableComponent,
    MultiActionsComponent,
    SelectRowComponent,
    RowDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TableDirectivesModule,
    TextModule,
    ButtonModule,
    AvatarModule,
    ImageModule,
    ReactiveFormsModule,
    LoadingModule,
    PaginatorModule,
    // Material
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    TableDirectivesModule,
    TableComponent
  ]
})
export class TableModule { }
