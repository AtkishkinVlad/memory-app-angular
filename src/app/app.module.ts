import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { HttpClientModule } from '@angular/common/http';

import { MemoryCardModule } from './memory-card/memory-card.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    HttpClientModule,
    MemoryCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
