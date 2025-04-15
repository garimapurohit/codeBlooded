
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { cn } from "@/lib/utils";

interface ReferralCardProps {
  invitedCount: number;
  bonusCount: number;
  score: number;
  className?: string;
}

export function ReferralCard({ invitedCount, bonusCount, score, className }: ReferralCardProps) {
  return (
    <Card className={cn("border-none bg-sidebar-accent", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-white">Referral Tracking</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Invited</p>
            <p className="text-xl font-semibold text-white">{invitedCount} people</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Bonus</p>
            <p className="text-xl font-semibold text-white">{bonusCount}</p>
          </div>
        </div>
        
        <div className="h-28 w-28">
          <CircularProgressbar
            value={score * 10}
            maxValue={100}
            text={score.toString()}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'round',
              textSize: '24px',
              pathTransitionDuration: 0.5,
              pathColor: `#4ade80`,
              textColor: '#ffffff',
              trailColor: '#2D3748',
            })}
          />
          <p className="mt-1 text-center text-xs text-muted-foreground">Total Score</p>
        </div>
      </CardContent>
    </Card>
  );
}
