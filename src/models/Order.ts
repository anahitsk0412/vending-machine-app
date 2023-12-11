export interface Order {
  productId: number;
  quantity: number;
  price: number | string;
  buyerId: number;
  sellerId: number;
  id: number;
  createdAt: string;
  productName: string;
  change: number[];
}
