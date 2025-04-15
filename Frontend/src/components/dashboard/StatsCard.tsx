
import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: {
    value: number;
    trend: "up" | "down";
  };
  icon: React.ReactNode;
  className?: string;
}

export function StatsCard({ title, value, change, icon, className }: StatsCardProps) {
  return (
    <Card className={cn("flex items-center p-4 bg-sidebar-accent border-none", className)}>
      <div className="flex flex-1 flex-col">
        <span className="text-sm text-muted-foreground">{title}</span>
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-white">{value}</span>
          <div className={cn(
            "flex items-center text-xs font-medium",
            change.trend === "up" ? "text-green-500" : "text-red-500"
          )}>
            {change.trend === "up" ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
            {change.value}%
          </div>
        </div>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600">
        {icon}
      </div>
    </Card>
  );
}
