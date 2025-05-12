import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";

interface NavGroupProps {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const NavGroup = ({ label, icon, children, defaultOpen = false }: NavGroupProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const location = useLocation();
  const { state } = useSidebar();

  // Check if any child route is active to keep the group open
  useEffect(() => {
    if (state !== "collapsed") {
      const childLinks = React.Children.toArray(children).filter(
        (child) => React.isValidElement(child) && child.props.to
      );
      
      const hasActiveChild = childLinks.some((child: any) => 
        location.pathname === child.props.to
      );
      
      if (hasActiveChild) setOpen(true);
    }
  }, [location.pathname, children, state]);

  return (
    <SidebarGroup defaultOpen={open} onOpenChange={setOpen}>
      <div
        className={cn(
          "flex cursor-pointer items-center gap-2 px-3 py-2 text-light-gray-700 hover:text-light-gray-900",
          open && state !== "collapsed" && "font-medium text-light-gray-900"
        )}
      >
        <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
        {state !== "collapsed" && (
          <>
            <span className="text-sm">{label}</span>
            <ChevronDown
              className={cn(
                "ml-auto h-4 w-4 transition-transform",
                open && "rotate-180"
              )}
            />
          </>
        )}
      </div>
      {state !== "collapsed" && (
        <SidebarGroupContent>
          <SidebarMenu className="ml-6 border-l border-light-gray-300 pl-2">
            {children}
          </SidebarMenu>
        </SidebarGroupContent>
      )}
    </SidebarGroup>
  );
};

export default NavGroup;
