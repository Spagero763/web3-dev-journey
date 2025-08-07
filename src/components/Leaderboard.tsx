// components/Leaderboard.tsx
'use client'

import { useTopBuilder } from '@/hooks/useLeaderboard'

export default function Leaderboard() {
  const { data, isLoading, isError } = useTopBuilder()

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">🏆 Top Builder</h2>

      {isLoading && <p>Loading leaderboard...</p>}
      {isError && <p className="text-red-600">Failed to load leaderboard</p>}

      {data && (
        <div className="text-sm break-all">
          <p><strong>Address:</strong> {data[0]}</p>
          <p><strong>Points:</strong> {data[1].toString()}</p>
        </div>
      )}
    </div>
  )
}
