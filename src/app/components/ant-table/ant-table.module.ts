import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntTableComponent } from 'app-components/ant-table/ant-table.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [AntTableComponent],
  exports: [AntTableComponent],
})
export class AntTableModule {}
