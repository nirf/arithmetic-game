import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticGameComponent } from './arithmetic-game.component';

describe('ArithmeticGameComponent', () => {
  let component: ArithmeticGameComponent;
  let fixture: ComponentFixture<ArithmeticGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmeticGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
