interface AssetCardProps {
  asset: {
    id: string
    title: string
    description: string
    category: string
    tags: string[]
    imageUrl: string
    thumbnailUrl: string
    downloads: number
    likes: number
  }
}

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
      {/* 图片 */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={asset.thumbnailUrl}
          alt={asset.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
          {asset.category}
        </div>
      </div>

      {/* 内容 */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-1">{asset.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{asset.description}</p>
        
        {/* 标签 */}
        <div className="flex flex-wrap gap-1 mb-3">
          {asset.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
          {asset.tags.length > 3 && (
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              +{asset.tags.length - 3}
            </span>
          )}
        </div>

        {/* 底部信息 */}
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {asset.downloads}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {asset.likes}
            </span>
          </div>
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1.5 rounded-full text-sm hover:opacity-90 transition-opacity">
            查看详情
          </button>
        </div>
      </div>
    </div>
  )
}
