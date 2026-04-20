export function Footer() {
  return (
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
  )
}
