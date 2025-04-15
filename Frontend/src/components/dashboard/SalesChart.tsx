
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface SalesChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
  growth: number;
  year: number;
  className?: string;
}

export function SalesChart({ data, growth, year, className }: SalesChartProps) {
  return (
    <Card className={cn("border-none bg-sidebar-accent", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-white">Sales overview</CardTitle>
          <span className="text-xs text-green-500">{`(+${growth}%) more in ${year}`}</span>
        </div>
      </CardHeader>
      <CardContent className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4263eb" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4263eb" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1E1E2E', borderColor: '#333', borderRadius: '8px' }} 
              itemStyle={{ color: '#fff' }} 
              labelStyle={{ color: '#94a3b8' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#4263eb" 
              strokeWidth={2} 
              fill="url(#colorArea)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
