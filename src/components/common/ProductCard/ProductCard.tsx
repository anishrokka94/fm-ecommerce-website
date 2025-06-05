interface ProductCardProps {
  products: [];
}

const ProductCard = ({ products }: ProductCardProps) => {
  console.log("prosasa", products);
  return (
    <>
      {products?.map((product) => {
        return (
          <div className="group relative">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {product.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
