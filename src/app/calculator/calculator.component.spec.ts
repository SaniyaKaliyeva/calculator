import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the division correctly', () => {
    component.operand1 = 10;
    component.operand2 = 2;
    component.selectedOperation = '/';
    component.calculate();
    expect(component.calculations[0].result).toEqual(5);
  });

  it('should calculate the remainder correctly', () => {
    component.operand1 = 10;
    component.operand2 = 3;
    component.selectedOperation = '%';
    component.calculate();
    expect(component.calculations[0].result).toEqual(1);
  });

  it('should find the highest prime number correctly', () => {
    component.operand1 = 10;
    component.operand2 = 20;
    component.selectedOperation = 'prime';
    component.calculate();
    expect(component.calculations[0].result).toEqual(19);
  });
});
