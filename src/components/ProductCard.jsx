import { PackageIcon, StarIcon } from './Icons'

export default function ProductCard({
  name,
  price,
  image,
  icon,
  category,
  rating,
  description,
  onAddToCart,
  onViewDetail
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-5 flex flex-col justify-between hover:shadow-md hover:border-gray-200 transition-all duration-200">
      <div>
        <div className="h-44 bg-slate-50 rounded-xl flex items-center justify-center p-4 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
          ) : (
            <PackageIcon className="w-16 h-16 text-gray-300" />
          )}
        </div>

        <div className="mt-4">
          {category && (
            <span className="inline-block text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full capitalize mb-1">
              {category}
            </span>
          )}
          <h3 className="font-bold text-gray-800 text-base leading-snug line-clamp-1" title={name}>
            {name}
          </h3>
          <p className="text-lg font-extrabold text-blue-600 mt-1">
            ฿{typeof price === 'number' ? price.toLocaleString() : price}
          </p>

          {rating && (
            <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-500">
              <span className="flex items-center gap-1 text-amber-500 font-bold">
                <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{rating.rate || rating}</span>
              </span>
              {rating.count && <span>({rating.count})</span>}
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <button
          onClick={onAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-xs"
        >
          Add to Cart
        </button>

        {onViewDetail && (
          <button
            onClick={onViewDetail}
            className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-xl text-xs transition-colors border border-gray-200"
          >
            View Detail
          </button>
        )}
      </div>
    </div>
  )
}
