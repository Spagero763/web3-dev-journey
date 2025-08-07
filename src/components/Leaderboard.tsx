// components/Leaderboard.tsx
'use client'

import { useTopBuilder } from '@/hooks/useLeaderboard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Leaderboard() {
  const { data, isLoading, isError } = useTopBuilder()

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">🏆 Top Builder</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && <p>Loading leaderboard...</p>}
        {isError && <p className="text-red-600">Failed to load leaderboard</p>}
        {data && (
          <div className="text-sm break-all space-y-2">
            <div>
              <p className="font-semibold">Address:</p> 
              <p className="text-muted-foreground">{data[0]}</p>
            </div>
            <div>
              <p className="font-semibold">Points:</p>
              <p className="text-muted-foreground">{data[1].toString()}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
