
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface UsersChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
  growth: number;
  className?: string;
}

export function UsersChart({ data, growth, className }: UsersChartProps) {
  return (
    <Card className={cn("border-none bg-sidebar-accent", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-white">Active Users</CardTitle>
          <span className="text-xs text-green-500">{`(+${growth}%) than last week`}</span>
        </div>
      </CardHeader>
      <CardContent className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
            <XAxis hide />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1E1E2E', borderColor: '#333', borderRadius: '8px' }} 
              itemStyle={{ color: '#fff' }} 
              labelStyle={{ color: '#94a3b8' }}
            />
            <Bar dataKey="value" fill="#ffffff" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
