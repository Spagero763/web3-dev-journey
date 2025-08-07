
"use client";

import { useTopBuilder } from "@/hooks/useLeaderboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Trophy } from "lucide-react";

export default function TopBuilder() {
  const { data, isLoading, isError } = useTopBuilder();

  return (
    <Card className="bg-card/70 border-border/60">
      <CardHeader>
        <CardTitle className="flex items-center text-base font-medium">
          <Trophy className="w-4 h-4 mr-2 text-primary" />
          Top Builder
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && <Skeleton className="w-full h-8 bg-muted/50" />}
        {isError && <p className="text-red-600 text-sm">Failed to load leaderboard.</p>}
        {data && Array.isArray(data) && (
          <div className="text-sm break-all space-y-1">
            <p className="font-mono text-xs truncate text-muted-foreground">
              {String(data[0])}
            </p>
            <p className="font-semibold text-lg text-foreground">
              {Number(data[1])} Points
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
