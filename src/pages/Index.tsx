
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import StatCard from "@/components/dashboard/StatCard";
import RecentOrdersTable from "@/components/dashboard/RecentOrdersTable";
import SalesChart from "@/components/dashboard/SalesChart";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import { Users, ShoppingBag, DollarSign, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggler from "@/components/ui/ThemeToggler";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <main className={cn("flex-1 overflow-y-auto bg-light-gray-100 p-4 lg:p-6")}>
            {/* Page Header */}
            {/* <ThemeToggler /> */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-light-gray-900">Dashboard</h1>
              <p className="text-light-gray-700">Welcome to Falcon Dashboard</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total Customers"
                value="58.4K"
                icon={<Users className="h-5 w-5" />}
                trend={{
                  value: 12.3,
                  isPositive: true,
                }}
                description="vs last month"
                iconColor="text-primary-500 bg-primary-100"
              />
              <StatCard
                title="Orders"
                value="23.4K"
                icon={<ShoppingBag className="h-5 w-5" />}
                trend={{
                  value: 3.7,
                  isPositive: false,
                }}
                description="vs last month"
                iconColor="text-success bg-success-100"
              />
              <StatCard
                title="Revenue"
                value="$46.5K"
                icon={<DollarSign className="h-5 w-5" />}
                trend={{
                  value: 9.2,
                  isPositive: true,
                }}
                description="vs last month"
                iconColor="text-warning-500 bg-warning-100"
              />
              <StatCard
                title="Growth"
                value="+25.7%"
                icon={<TrendingUp className="h-5 w-5" />}
                trend={{
                  value: 4.1,
                  isPositive: true,
                }}
                description="vs last month"
                iconColor="text-info bg-info-100"
              />
            </div>

            {/* Charts and Tables */}
            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 xl:col-span-8">
                <SalesChart />
              </div>
              <div className="col-span-12 xl:col-span-4">
                <ActivityTimeline />
              </div>
              <div className="col-span-12">
                <RecentOrdersTable />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
