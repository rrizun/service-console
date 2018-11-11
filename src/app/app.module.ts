import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, AuthGuard } from './app-routing.module';
import { AppComponent, LoginComponent, PageOneComponent, PageTwoComponent, SecureComponent, LoremIpsumComponent } from './app.component';
import { RemoteService } from './RemoteService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageOneComponent,
    PageTwoComponent,
    SecureComponent,
    LoremIpsumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [AuthGuard, RemoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
