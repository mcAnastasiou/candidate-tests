import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) { }

  private remainingReponses = 0;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showSpinner();
    this.remainingReponses++;

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.onResponseCompleted();
      }
    },
      (err: any) => {
        this.onResponseCompleted();
    }));
  }

  private showSpinner() {
    if (this.remainingReponses === 0) {
      this.spinner.show();
    }
  }

  private hideSpinner() {
    if (this.remainingReponses === 0) {
      this.spinner.hide();
    }
  }

  private onResponseCompleted() {
    this.remainingReponses--;
        this.hideSpinner();
  }
}
