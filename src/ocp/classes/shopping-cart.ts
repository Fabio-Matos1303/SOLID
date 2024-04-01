import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) { }

  get items(): readonly CartItem[] {
    return this._items;
  }

  addItem(item: CartItem): CartItem {
    this._items.push(item);

    return item;
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(discount: number): number {
    return this.discount.calculate(this.total());
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  } // Única validação da classe, se houverem mais, ponderar a separação
}
