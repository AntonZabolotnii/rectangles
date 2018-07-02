import { Injectable, ElementRef } from '@angular/core';
import { Rectangle } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {

  draw(canvasRef: ElementRef, data: Array<Rectangle>, width: number, height: number) {

    const ctx: CanvasRenderingContext2D = canvasRef.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, width, height);

    if (!data || !data.length) {
      return;
    }

    ctx.beginPath();

    data.forEach(item => {

      const { x, y, width, height } = item;

      ctx.moveTo(x, y);
      ctx.rect(x, y, width, height);

    });

    ctx.stroke();
  }
}
