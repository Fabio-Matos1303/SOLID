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

import { Messaging } from './ocp/services/messaging';
import { Order } from './ocp/classes/order';
import { Persistency } from './ocp/services/persistency';
import { Product } from './ocp/classes/product';
import { ShoppingCart } from './ocp/classes/shopping-cart';
import { FiftyPercentDicount, NoDiscount } from './ocp/classes/discount';

const noDiscount = new NoDiscount();
const fiftyPercentDicount = new FiftyPercentDicount();
const shoppingCart = new ShoppingCart(fiftyPercentDicount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Garrafa', 25.9));
shoppingCart.addItem(new Product('Lanterna', 21.9));

console.log(shoppingCart.items);
console.log('Total: ' + shoppingCart.total());
console.log('Total com desconto: ' + shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
