
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Users, MousePointer, ShoppingCart, Package } from "lucide-react";

interface StatsItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

export function UsersStatsCard() {
  const statsItems: StatsItem[] = [
    {
      icon: <Users size={18} className="text-white" />,
      label: "Users",
      value: "32,984",
      color: "bg-blue-600"
    },
    {
      icon: <MousePointer size={18} className="text-white" />,
      label: "Clicks",
      value: "2.42m",
      color: "bg-purple-600"
    },
    {
      icon: <ShoppingCart size={18} className="text-white" />,
      label: "Sales",
      value: "2,400$",
      color: "bg-green-600"
    },
    {
      icon: <Package size={18} className="text-white" />,
      label: "Items",
      value: "320",
      color: "bg-amber-600"
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {statsItems.map((item, index) => (
        <Card key={index} className="border-none bg-sidebar-accent p-4">
          <div className="flex items-center gap-3">
            <div className={cn("flex h-10 w-10 items-center justify-center rounded-md", item.color)}>
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">{item.label}</span>
              <span className="text-lg font-semibold text-white">{item.value}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
