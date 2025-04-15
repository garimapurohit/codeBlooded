
import React from "react";
import { Bell, Search, Cog } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3">
      <div className="flex flex-col">
        <div className="flex items-center text-sm text-muted-foreground">
          <span>Pages /</span>
          <span className="ml-1 text-white">Dashboard</span>
        </div>
        <h1 className="text-xl font-semibold text-white">Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative rounded-full bg-sidebar-accent">
          <Input 
            type="text" 
            placeholder="Type here..." 
            className="w-64 bg-transparent border-none rounded-full pl-10 pr-4" 
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
        
        <Button variant="ghost" className="rounded-full p-2 h-auto">
          <Bell size={18} />
        </Button>
        <Button variant="ghost" className="rounded-full p-2 h-auto">
          <Cog size={18} />
        </Button>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-white">Sign In</span>
        </div>
      </div>
    </header>
  );
}
