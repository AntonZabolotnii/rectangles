import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { Rectangle } from './interfaces';
import { DataService } from './data.service';
import { PersistenceService } from './persistence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputData: Array<Rectangle> = [];
  outputData: Array<Rectangle> = [];

  numberOfRect = 5;
  rectAreaWidth = 960;
  rectAreaHeight = 300;

  constructor(
    private dataService: DataService,
    private persistenceService: PersistenceService,
    iconReg: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconReg.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/close.svg'));
  }

  generateData(numberOfRect: number) {
    this.inputData = this.dataService.generateInput(numberOfRect, this.rectAreaWidth, this.rectAreaHeight);

    this.clearOutput();
  }

  clearOutput() {
    this.outputData = [];
    this.persistenceService.clear('output');
  }

  generateOutput() {
    this.outputData = this.dataService.generateOutput();
  }

}
