/* eslint-disable prettier/prettier */
import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  // eslint-disable-next-line prettier/prettier
  constructor(
    private readonly _cart: ShoppingCart,
    private readonly _message: Messaging,
    private readonly _persistency: Persistency,
  ) { }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this._cart.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }
    this._orderStatus = 'closed';
    this._message.sendMessage(
      `Seu pedido com total de ${this._cart.total()} foi recebido.`,
    );
    this._persistency.saveOrder();
    this._cart.clear();
  }
}
