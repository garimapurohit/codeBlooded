
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowUp } from "lucide-react";

interface Order {
  title: string;
  time: string;
  icon: React.ReactNode;
  iconColor: string;
}

interface OrdersOverviewProps {
  orders: Order[];
  growth: number;
  className?: string;
}

export function OrdersOverview({ orders, growth, className }: OrdersOverviewProps) {
  return (
    <Card className={cn("border-none bg-sidebar-accent", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-white">Orders overview</CardTitle>
          <Badge className="bg-green-900 text-green-300 hover:bg-green-800">
            <ArrowUp size={12} className="mr-1" />
            {growth}% this month
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {orders.map((order, index) => (
            <li key={index} className="relative pl-8">
              <div 
                className={cn(
                  "absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full",
                  order.iconColor
                )}
              >
                {order.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{order.title}</p>
                <p className="text-xs text-muted-foreground">{order.time}</p>
              </div>
              {index < orders.length - 1 && (
                <div className="absolute left-3 top-6 h-[calc(100%-12px)] w-[1px] bg-slate-700"></div>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
