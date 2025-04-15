
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { SatisfactionCard } from "@/components/dashboard/SatisfactionCard";
import { ReferralCard } from "@/components/dashboard/ReferralCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { UsersChart } from "@/components/dashboard/UsersChart";
import { UsersStatsCard } from "@/components/dashboard/UsersStatsCard";
import { ProjectsTable } from "@/components/dashboard/ProjectsTable";
import { OrdersOverview } from "@/components/dashboard/OrdersOverview";
import { 
  DollarSign,
  Users,
  BarChart2,
  ShoppingCart,
  Pencil, 
  Bell, 
  ShoppingBag 
} from "lucide-react";

const salesData = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
  { name: "Jun", value: 239 },
  { name: "Jul", value: 349 },
  { name: "Aug", value: 430 },
  { name: "Sep", value: 380 },
  { name: "Oct", value: 430 },
  { name: "Nov", value: 500 },
  { name: "Dec", value: 400 },
];

const usersData = [
  { name: "1", value: 400 },
  { name: "2", value: 600 },
  { name: "3", value: 300 },
  { name: "4", value: 500 },
  { name: "5", value: 700 },
  { name: "6", value: 400 },
  { name: "7", value: 800 },
  { name: "8", value: 900 },
  { name: "9", value: 700 },
  { name: "10", value: 500 },
];

const projects = [
  {
    company: "Chakra Soft UI Version",
    members: ["A", "B", "C", "D"],
    budget: "$14,000",
    completion: 60
  },
];

const orders = [
  {
    title: "$2400, Design changes",
    time: "22 DEC 7:20 PM",
    icon: <Pencil size={14} className="text-white" />,
    iconColor: "bg-blue-600"
  },
  {
    title: "New order #4219423",
    time: "21 DEC 11:21 PM",
    icon: <Bell size={14} className="text-white" />,
    iconColor: "bg-green-600"
  },
  {
    title: "Server Payments for April",
    time: "21 DEC 9:28 PM",
    icon: <ShoppingBag size={14} className="text-white" />,
    iconColor: "bg-orange-600"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Sidebar />
          <div className="flex-1 overflow-auto">
            <Header />
            
            <main className="p-6">
              {/* Stats cards */}
              <div className="grid grid-cols-4 gap-6">
                <StatsCard 
                  title="Today's Money" 
                  value="$53,000" 
                  change={{ value: 55, trend: "up" }}
                  icon={<DollarSign size={20} className="text-white" />}
                />
                <StatsCard 
                  title="Today's Users" 
                  value="2,300" 
                  change={{ value: 5, trend: "up" }}
                  icon={<Users size={20} className="text-white" />}
                />
                <StatsCard 
                  title="New Clients" 
                  value="+3,052" 
                  change={{ value: 14, trend: "down" }}
                  icon={<BarChart2 size={20} className="text-white" />}
                />
                <StatsCard 
                  title="Total Sales" 
                  value="$173,000" 
                  change={{ value: 8, trend: "up" }}
                  icon={<ShoppingCart size={20} className="text-white" />}
                />
              </div>
              
              {/* Middle section */}
              <div className="mt-6 grid grid-cols-3 gap-6">
                <WelcomeCard name="Mark Johnson" />
                <SatisfactionCard 
                  title="Satisfaction Rate" 
                  subtitle="From all projects" 
                  value={95} 
                />
                <ReferralCard 
                  invitedCount={145} 
                  bonusCount={1465} 
                  score={9.3} 
                />
              </div>
              
              {/* Charts section */}
              <div className="mt-6 grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <SalesChart 
                    data={salesData} 
                    growth={5}
                    year={2021}
                  />
                </div>
                <div className="col-span-1">
                  <UsersChart 
                    data={usersData} 
                    growth={23}
                  />
                </div>
              </div>

              {/* Stats icons */}
              <div className="mt-6">
                <UsersStatsCard />
              </div>
              
              {/* Projects and Orders */}
              <div className="mt-6 grid grid-cols-4 gap-6">
                <div className="col-span-3">
                  <ProjectsTable projects={projects} />
                </div>
                <div className="col-span-1">
                  <OrdersOverview 
                    orders={orders} 
                    growth={30}
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
