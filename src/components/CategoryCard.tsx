interface CategoryCardProps {
  icon: string
  name: string
  count: number
  gradient: string
}

export function CategoryCard({ icon, name, count, gradient }: CategoryCardProps) {
  const gradients: Record<string, string> = {
    'blue-purple': 'from-blue-500 to-purple-600',
    'green-blue': 'from-green-500 to-blue-600',
    'orange-red': 'from-orange-500 to-red-600',
    'purple-pink': 'from-purple-500 to-pink-600',
    'cyan-green': 'from-cyan-500 to-green-600',
    'yellow-orange': 'from-yellow-500 to-orange-600',
    'red-orange': 'from-red-500 to-orange-600',
    'brown-yellow': 'from-amber-700 to-yellow-600',
  }

  return (
    <div className="group cursor-pointer">
      <div className={`bg-gradient-to-br ${gradients[gradient] || 'from-gray-500 to-gray-600'} rounded-2xl p-6 h-40 flex flex-col justify-between transition-transform group-hover:scale-105 shadow-lg`}>
        <div className="text-4xl">{icon}</div>
        <div>
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-white/80 text-sm">{count}个素材</p>
        </div>
      </div>
    </div>
  )
}
