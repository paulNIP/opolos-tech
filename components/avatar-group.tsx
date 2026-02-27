'use client'

import Image from 'next/image'

interface AvatarGroupProps {
  count?: number
  maxDisplay?: number
}

export function AvatarGroup({ count = 120, maxDisplay = 4 }: AvatarGroupProps) {
  // Generate avatar colors/initials
  const avatars = Array.from({ length: maxDisplay }, (_, i) => ({
    id: i,
    initial: String.fromCharCode(65 + i), // A, B, C, D
    color: [
      'bg-blue-500',
      'bg-purple-500',
      'bg-green-500',
      'bg-orange-500',
    ][i],
  }))

  return (
    <div className="flex items-center space-x-2">
      {/* Avatar Stack */}
      <div className="flex -space-x-2">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`w-10 h-10 ${avatar.color} rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-md hover:scale-110 hover:z-10 transition-transform cursor-pointer`}
            title={`User ${avatar.initial}`}
          >
            {avatar.initial}
          </div>
        ))}
      </div>

      {/* Count Text */}
      <span className="text-sm font-medium text-gray-700 ml-2">
        {count}+ customers <span className="text-gray-500">worldwide</span>
      </span>
    </div>
  )
}
