import { Component } from '@angular/core';

interface Calculation {
  operand1: number;
  operand2: number;
  operation: string;
  result: number | string;
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
    let result: number | string;
    switch (this.selectedOperation) {
      case '+':
        result = this.operand1 + this.operand2;
        break;
      case '/':
        result = this.checkDivisor(this.operand1, this.operand2, 'division');
        break;
      case '%':
        result = this.checkDivisor(this.operand1, this.operand2, 'remainder');
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

  private checkDivisor(dividend: number, divisor: number, operation: 'division' | 'remainder'): number | string {
    if (divisor !== 0) {
      if (operation === 'division') {
        const result = dividend / divisor;
        return result;
      } else if (operation === 'remainder') {
        const result = dividend % divisor;
        return result;
      } else {
        return 'Error: invalid operation!';
      }
    } else {
      return 'Error: division by zero!';
    }
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
