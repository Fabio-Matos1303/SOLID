/*
Vantagens e desvantagens do S.O.L.I.D.

Vantagens:
- Código modular
- Código reutilizável (D.R.Y - Don't repeat yourself)
- Código testável, baixo acoplamento
- Baixo acoplamento e alta coesão
- Código expansível
- Separations of concerns (Separação de conceitos)
- Fácil manutenção
Desvantagens:
- Complexidade
- Quantidade de código digitado aumenta
- Tempo de desenvolvimento aumenta bastante
- Tenha cuidados com: YAGNI, KISS (You aren't gonna need it, Keep it simple, stupid!)
*/

import { Messaging } from './srp/services/messaging';
import { Order } from './srp/entities/order';
import { Persistency } from './srp/services/persistency';
import { Product } from './srp/entities/product';
import { ShoppingCart } from './srp/entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Garrafa', 25.9));
shoppingCart.addItem(new Product('Lanterna', 21.9));

console.log(shoppingCart.items);
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
