import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, AuthGuard } from './app-routing.module';
import { AppComponent, DialogOverviewExampleDialog, LoginComponent, LoremIpsumComponent, PageOneComponent, PageTwoComponent, SecureComponent } from './app.component';
import { BusyInterceptor } from './BusyInterceptor';
import { RemoteService } from './RemoteService';

import "time-elements/dist/time-elements.js"
// import "time-elements/dist/time-elements-legacy.js"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageOneComponent,
    PageTwoComponent,
    SecureComponent,
    LoremIpsumComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  providers: [
    AuthGuard,
    RemoteService,
    { provide: HTTP_INTERCEPTORS, useClass: BusyInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents:[DialogOverviewExampleDialog]
})
export class AppModule { }
