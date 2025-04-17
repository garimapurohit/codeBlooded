
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WelcomeCardProps {
  name: string;
  className?: string;
}

export function WelcomeCard({ name, className }: WelcomeCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden border-none bg-gradient-to-r from-blue-900 to-blue-800",
      className
    )}>
      <div className="absolute right-0 top-0 h-full w-1/2">
        <img 
          src="/lovable-uploads/77451a84-ba30-4587-95a3-f447d5cd0ba3.png" 
          alt="Background graphic" 
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 p-6">
        <div className="mb-4 text-sm text-blue-300">Welcome</div>
        <h3 className="mb-1 text-2xl font-bold text-white">{name}</h3>
        <p className="mb-4 text-sm text-blue-300">Glad to see you again!<br />Ask me anything.</p>
        
        <div className="mt-6 flex items-center text-xs text-blue-300">
          <span>Tap to record →</span>
        </div>
      </div>
    </Card>
  );
}
