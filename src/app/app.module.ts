import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { GithubService } from 'app-services/github/github.service';
import { AntTableModule } from 'app-components/ant-table/ant-table.module';
import { MaterialTableModule } from 'app-components/material-table/material-table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AntTableModule,
    MaterialTableModule,
  ],
  providers: [GithubService, { provide: NZ_LOCALE, useValue: enUS }],
  bootstrap: [AppComponent],
})
export class AppModule {}
