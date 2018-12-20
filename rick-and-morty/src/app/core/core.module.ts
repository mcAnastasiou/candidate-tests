import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader-interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ErrorsHandler } from './errors-handler';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  declarations: [HeaderComponent, ErrorComponent],
  exports: [HeaderComponent, ErrorComponent, NgxSpinnerModule]
})
export class CoreModule { }
