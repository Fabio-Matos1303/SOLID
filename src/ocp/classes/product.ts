/* eslint-disable prettier/prettier */
import { CartItem } from './interfaces/cart-item';

export class Product implements CartItem {
  constructor(public item: string, public price: number) { }
}
