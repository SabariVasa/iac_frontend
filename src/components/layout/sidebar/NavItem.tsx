
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed?: boolean;
}

const NavItem = ({ to, icon, label, collapsed }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <NavLink
          to={to}
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 transition-all",
            isActive
              ? "bg-primary-100 text-primary-600 font-medium"
              : "text-light-gray-700 hover:bg-light-gray-200"
          )}
        >
          <span className="flex h-5 w-5 items-center justify-center">
            {icon}
          </span>
          {!collapsed && <span className="text-sm">{label}</span>}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default NavItem;
