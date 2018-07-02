import { Component, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Rectangle } from '../interfaces';
import { DrawingService } from '../drawing.service';

@Component({
  selector: 'app-rectangles-area',
  templateUrl: './rectangles-area.component.html',
  styleUrls: ['./rectangles-area.component.css']
})
export class RectanglesAreaComponent implements OnChanges {

  @Input() data: Array<Rectangle>;
  @Input() height: number;
  @Input() width: number;

  @ViewChild('canvas') canvasRef: ElementRef

  constructor(
    private drawer: DrawingService
  ) {}

  ngOnChanges() {
    this.drawer.draw(this.canvasRef, this.data, this.width, this.height);
  }

}
