export interface ProductCard {
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
  discountPercentage: number;
  thumbnail: string;
  price: number;
  availabilityStatus: string;
  description: string;
  images: string[];
  rating: number;
  returnPolicy: string;
  stock: number;
  warrentyInformation: string;
  weight: number;
  tags: string[];
}
