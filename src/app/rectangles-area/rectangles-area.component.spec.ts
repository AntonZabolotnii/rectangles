import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectanglesAreaComponent } from './rectangles-area.component';

describe('RectanglesAreaComponent', () => {
  let component: RectanglesAreaComponent;
  let fixture: ComponentFixture<RectanglesAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectanglesAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectanglesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
