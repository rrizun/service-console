import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { RemoteService } from './RemoteService';
import { LogHelper } from './LogHelper';

/**
 * BusyInterceptor
 */
@Injectable()
export class BusyInterceptor implements HttpInterceptor {
  constructor(private remoteService: RemoteService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.log(JSON.stringify(req));
    ++this.remoteService.busy;
    return next.handle(req).pipe(
      tap({error: (e) => {
        this.remoteService.messages.push(new Date()+e.message);
      }}),
      finalize(() => {
        --this.remoteService.busy;
      })
    );
  }
  private log(...args: any[]) {
    new LogHelper(this).log(args);
}
}