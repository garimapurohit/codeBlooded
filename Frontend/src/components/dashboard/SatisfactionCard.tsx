
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { cn } from "@/lib/utils";

interface SatisfactionCardProps {
  title: string;
  subtitle: string;
  value: number;
  className?: string;
}

export function SatisfactionCard({ title, subtitle, value, className }: SatisfactionCardProps) {
  return (
    <Card className={cn("border-none bg-sidebar-accent", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-white">{title}</CardTitle>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center pb-6">
        <div className="h-32 w-32">
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'round',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: `#4263eb`,
              textColor: '#ffffff',
              trailColor: '#2D3748',
            })}
          />
        </div>
        <div className="mt-2 flex w-full justify-between px-4 text-xs text-muted-foreground">
          <span>0%</span>
          <span>Based on likes</span>
          <span>100%</span>
        </div>
      </CardContent>
    </Card>
  );
}
