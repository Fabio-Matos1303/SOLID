type CartItem = { item: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  get items(): readonly CartItem[] {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log('Mensagem enviada: ', message);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }
}

const cart = new ShoppingCartLegacy();
cart.addItem({ item: 'foo', price: 10.9 });
cart.addItem({ item: 'foo', price: 10.9 });
cart.addItem({ item: 'foo', price: 10.9 });

console.log(cart.items);
console.log(cart.orderStatus);
cart.checkout();
console.log(cart.orderStatus);
