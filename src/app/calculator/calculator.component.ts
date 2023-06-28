import { Component } from '@angular/core';

interface Calculation {
  operand1: number;
  operand2: number;
  operation: string;
  result: number;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  operand1 = 0;
  operand2 = 0 ;
  selectedOperation = '+';
  calculations: Calculation[] = [];

  calculate(): void {
    let result: number;
    switch (this.selectedOperation) {
      case '+':
        result = this.operand1 + this.operand2;
        break;
      case '/':
        result = this.operand1 / this.operand2;
        break;
      case '%':
        result = this.operand1 % this.operand2;
        break;
      case 'prime':
        result = this.findHighestPrime(this.operand1, this.operand2);
        break;
      default:
        result = NaN;
        break;
    }

    const calculation: Calculation = {
      operand1: this.operand1,
      operand2: this.operand2,
      operation: this.selectedOperation,
      result: result
    };

    this.calculations.push(calculation);
  }

  private findHighestPrime(a: number, b: number): number {
    let highestPrime = -1;
    for (let i = a; i <= b; i++) {
      if (this.isPrime(i) && i > highestPrime) {
        highestPrime = i;
      }
    }
    return highestPrime;
  }

  private isPrime(num: number): boolean {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
