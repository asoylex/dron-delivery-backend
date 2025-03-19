import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';

export class CreateArticleDto {
  quantity: number;
  product?: Product | number;
  order?: Order | number;
}
