import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule, MatExpansionModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RectanglesAreaComponent } from './rectangles-area/rectangles-area.component';
import { DataPanelComponent } from './data-panel/data-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    RectanglesAreaComponent,
    DataPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
