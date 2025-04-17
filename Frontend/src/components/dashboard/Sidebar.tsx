
import React from "react";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, LayoutGrid, FileText, CreditCard, Settings, UserCircle, LogIn, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <SidebarComponent className={cn(className)}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <div className="h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white font-bold">V</span>
          </div>
          <span className="text-base font-semibold text-white">VISION UI PRO</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <a href="#" className="flex items-center">
                    <Home size={18} />
                    <span className="ml-2">Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                <a
  href="#"
  onClick={() => (window.location.href = 'http://10.66.66.1:8096')}
  className="flex items-center"
>
  <FileText size={18} />
  <span className="ml-2">Media Server</span>
</a>

                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                <a
  href="#"
  onClick={() => (window.location.href = 'http://10.66.66.1:8081')}
  className="flex items-center"
>
  <CreditCard size={18} />
  <span className="ml-2">Cloud Storage</span>
</a>

                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center">
                    <LayoutGrid size={18} />
                    <span className="ml-2">RTL</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>ACCOUNT PAGES</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center">
                    <UserCircle size={18} />
                    <span className="ml-2">Profile</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center">
                    <LogIn size={18} />
                    <span className="ml-2">Sign In</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="flex items-center">
                    <UserPlus size={18} />
                    <span className="ml-2">Sign Up</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
}
