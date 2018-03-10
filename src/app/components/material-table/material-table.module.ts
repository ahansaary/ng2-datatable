import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialTableComponent } from 'app-components/material-table/material-table.component';
import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule],
  declarations: [MaterialTableComponent],
  exports: [MaterialTableComponent],
})
export class MaterialTableModule {}
