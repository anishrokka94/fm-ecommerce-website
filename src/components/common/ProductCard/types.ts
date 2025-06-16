export interface Product {
  id: number;
  title: string;
  brand: string;
  discountPercentage: number;
  thumbnail: string;
  price: number;
  category: string;
}

export interface ProductDetails {
  id: number;
  title: string;
  brand: string;
  category: string;
  dimensions: ProductDimension;
  discountPercentage: number;
  thumbnail: string;
  price: number;
  minimumOrderQuantity: number;
  availabilityStatus: string;
  description: string;
  images: string[];
  rating: number;
  returnPolicy: string;
  stock: number;
  sku: string;
  warrentyInformation: string;
  weight: number;
  tags: string[];
  reviews: string[];
  shippingInformation: string;
  warrantyInformation: string;
}

export interface ProductDimension {
  width: number;
  height: number;
  depth: number;
}
