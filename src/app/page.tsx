import { CategoryCard } from '@/components/CategoryCard'
import { AssetCard } from '@/components/AssetCard'

// 分类数据
const categories = [
  { icon: '👤', name: '人物', count: 500, gradient: 'blue-purple' },
  { icon: '🏞️', name: '场景', count: 300, gradient: 'green-blue' },
  { icon: '🎒', name: '道具', count: 400, gradient: 'orange-red' },
  { icon: '✨', name: '动效', count: 100, gradient: 'purple-pink' },
  { icon: '🎨', name: 'UI组件', count: 200, gradient: 'cyan-green' },
  { icon: '🔊', name: '声音', count: 70, gradient: 'yellow-orange' },
  { icon: '🖼️', name: '概念图', count: 200, gradient: 'red-orange' },
  { icon: '🎭', name: '纹理材质', count: 150, gradient: 'brown-yellow' },
]

// 热门标签
const hotTags = [
  '抽象', '自然', '风景', '极简', '现代', '渐变', '几何', '纹理',
  '植物', '建筑', '美食', '科技', '霓虹', '温馨', '清新'
]

// 示例素材数据
const sampleAssets = [
  {
    id: '1',
    title: '金色山脉',
    description: '日落时分的壮丽山景，适合自然风光项目',
    category: '场景',
    tags: ['自然', '山脉', '风景', '日落'],
    prompt: 'Majestic golden mountain landscape at sunset, dramatic lighting, warm golden hour, mountains silhouetted against vibrant orange and purple sky, photorealistic, 8K, cinematic composition, natural photography',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    downloads: 0,
    likes: 0,
  },
  {
    id: '2',
    title: '现代建筑室内',
    description: '现代感十足的室内设计',
    category: '场景',
    tags: ['建筑', '室内', '现代'],
    prompt: 'Modern architectural interior design, minimalist living room, floor-to-ceiling windows, natural light streaming in, clean lines, neutral color palette, contemporary furniture, architectural photography, 8K',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400',
    downloads: 0,
    likes: 0,
  },
  {
    id: '3',
    title: '热带植物图案',
    description: '热带风格的植物插画',
    category: '纹理材质',
    tags: ['植物', '热带', '图案'],
    prompt: 'Tropical botanical illustration, monstera leaves, palm fronds, vibrant green color palette, modern flat design, seamless pattern, digital art, botanical illustration, high detail',
    imageUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800',
    thumbnailUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400',
    downloads: 0,
    likes: 0,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI素材库
              </span>
            </div>
            <nav className="flex items-center gap-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">首页</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">素材库</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">关于我们</a>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:opacity-90">
                登录
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* 搜索区域 */}
      <section className="bg-white py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center bg-gray-100 rounded-full px-6 py-3">
            <span className="text-gray-400 mr-3">🔍</span>
            <input
              type="text"
              placeholder="搜索素材、标签、风格..."
              className="flex-1 bg-transparent outline-none text-gray-800"
            />
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:opacity-90">
              搜索
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 分类导航 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">探索分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </section>

        {/* 精选推荐 */}
        {sampleAssets.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">精选推荐</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleAssets.map((asset) => (
                <AssetCard key={asset.id} asset={asset} />
              ))}
            </div>
          </section>
        )}

        {/* 热门标签 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">热门标签</h2>
          <div className="flex flex-wrap gap-3">
            {hotTags.map((tag) => (
              <a
                key={tag}
                href="#"
                className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* 底部信息 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AI素材库</h3>
              <p className="text-gray-400 text-sm">提供高质量AI生成素材，助力创意设计</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">产品</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">素材库</a></li>
                <li><a href="#" className="hover:text-white">提示词</a></li>
                <li><a href="#" className="hover:text-white">教程</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">支持</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">帮助中心</a></li>
                <li><a href="#" className="hover:text-white">联系我们</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">关于</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">关于我们</a></li>
                <li><a href="#" className="hover:text-white">隐私政策</a></li>
                <li><a href="#" className="hover:text-white">服务条款</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            © 2026 AI素材库. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
