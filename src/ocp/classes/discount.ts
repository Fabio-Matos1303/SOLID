export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercentDicount extends Discount {
  private readonly discount: number = 0.5;

  calculate(value: number): number {
    return value - value * this.discount;
  }
}

export class NoDiscount extends Discount {
  calculate(value: number): number {
    return value;
  }
}
