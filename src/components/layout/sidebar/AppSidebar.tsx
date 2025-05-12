
import React from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  useSidebar,
} from "@/components/ui/sidebar";

import NavItem from "./NavItem";
import NavGroup from "./NavGroup";
import SidebarLogo from "./SidebarLogo";
import { navigationConfig } from "./navigationConfig";

const AppSidebar = () => {
  const { state } = useSidebar();
  const location = useLocation();
  
  const renderNavItems = () => {
    return navigationConfig.map((item, index) => {
      if (item.type === "item") {
        return (
          <NavItem
            key={item.path}
            to={item.path}
            icon={item.icon}
            label={item.label}
            collapsed={state === "collapsed"}
          />
        );
      } else if (item.type === "group") {
        const isActiveGroup = item.children?.some(
          child => location.pathname === child.path
        );
        
        return (
          <NavGroup
            key={`group-${index}`}
            label={item.label}
            icon={item.icon}
            defaultOpen={isActiveGroup}
          >
            {item.children?.map(child => (
              <NavItem
                key={child.path}
                to={child.path}
                icon={child.icon}
                label={child.label}
                collapsed={false}
              />
            ))}
          </NavGroup>
        );
      }
      return null;
    });
  };

  return (
    <Sidebar
      className={cn(
        "border-r border-light-gray-300 bg-white transition-all duration-300",
        state === "collapsed" ? "w-[70px]" : "w-[240px]"
      )}
      collapsible="icon"
    >
      <SidebarLogo />
      <SidebarContent className="py-4 overflow-y-auto scrollbar-hide">
        {renderNavItems()}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
