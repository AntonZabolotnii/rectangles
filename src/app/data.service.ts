import { Injectable } from '@angular/core';
import { Rectangle } from './interfaces';
import { PersistenceService } from './persistence.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private persistenceService: PersistenceService
  ) { }

  generateInput(numberOfRect: number, rectAreaWidth: number, rectAreaHeight: number): Array<Rectangle> {

    const data = [];

    const minWidth = rectAreaWidth * 0.02;
    const maxWidth = rectAreaWidth/numberOfRect;
    const minHeight = rectAreaHeight * 0.05;
    const maxHeight = rectAreaHeight * 0.95;

    let x = 0;
    let y = 0;

    while (numberOfRect--) {
      const width = this.getRandomNumber(minWidth, maxWidth);
      const height = this.getRandomNumber(minHeight, maxHeight);

      data.push({
        x,
        y,
        width,
        height
      });

      x += width;
    }

    this.persistenceService.save('input', data);

    return data;
  }

  getRandomNumber(min: number = 0, max: number) {
    return Math.ceil( min + Math.random() * (max - min) );
  }

  generateOutput() {
    let input;
    try {
      input = JSON.parse(this.persistenceService.get('input'));
    } catch(e) {
      console.error(e);
      return;
    }
    const output = this.processChunk(input, []);

    this.persistenceService.save('output', output);

    return output;
  }

  processChunk(input: Array<Rectangle>, output: Array<Rectangle>): Array<Rectangle> {
    if (!input.length) {
      return;
    }
    if (input.length === 1) {
      output.push(input[0]);
      return;
    }

    const {lowestElem, lowestElemIndex} = this.findLowestElement(input);
    output.push(this.calculateOutputRect(input, lowestElem.height));

    const {leftArr, rightArr} = this.divideInput(input, lowestElemIndex, lowestElem.height);

    this.processChunk(leftArr, output);
    this.processChunk(rightArr, output);

    return output;
  }

  divideInput(arr: Array<Rectangle>, lowestElemIndex: number, minHeight: number) {
    const processedArr = arr.map(rect => {
      const height = rect.height - minHeight;
      const y = rect.y + minHeight;
      return Object.assign({}, rect, {y, height});
    });

    return {
      leftArr: processedArr.slice(0, lowestElemIndex),
      rightArr: processedArr.slice(lowestElemIndex + 1)
    };
  }

  findLowestElement(arr: Array<Rectangle>) {
    let lowestElemIndex;
    let lowHeight = Infinity;

    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i].height < lowHeight) {
        lowHeight = arr[i].height;
        lowestElemIndex = i;
      }
    }
    const lowestElem = arr[lowestElemIndex];

    return {lowestElem, lowestElemIndex};
  }

  calculateOutputRect(rectangles: Array<Rectangle>, height: number): Rectangle {
    if (!rectangles.length) {
      return;
    }

    const x = rectangles[0].x;
    const y = rectangles[0].y;

    const width = rectangles.reduce((total, current) => {
      return total += current.width;
    }, 0);

    return {x, y, width, height};
  }

}
