import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register(''),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
