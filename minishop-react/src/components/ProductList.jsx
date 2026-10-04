import ProductCard from './ProductCard'

export default function ProductList({ products, onAddToCart, onViewDetail }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.title || product.name}
          price={product.price}
          image={product.image}
          icon={product.icon}
          category={product.category}
          rating={product.rating}
          description={product.description}
          onAddToCart={() => onAddToCart(product)}
          onViewDetail={() => onViewDetail && onViewDetail(product)}
        />
      ))}
    </div>
  )
}
