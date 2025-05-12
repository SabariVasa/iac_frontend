
import React from "react";
import { useSidebar, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const SidebarLogo = () => {
  const { state } = useSidebar();

  return (
    <div className="flex h-16 items-center justify-between border-b border-light-gray-300 px-4">
      {state !== "collapsed" ? (
        <div className="flex items-center gap-2">
          <div className="text-primary-500">
            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.5 12C26.5 5.649 20.8512 0 14.5 0C8.14875 0 2.5 5.649 2.5 12C2.5 18.351 8.14875 24 14.5 24C20.8512 24 26.5 18.351 26.5 12Z" fill="currentColor"></path>
              <path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z" fill="white"></path>
              <path d="M0 12C0 5.37259 5.37259 0 12 0V24C5.37259 24 0 18.6274 0 12Z" fill="currentColor"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-light-gray-900">Falcon</h1>
        </div>
      ) : (
        <div className="mx-auto text-primary-500">
          <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.5 12C26.5 5.649 20.8512 0 14.5 0C8.14875 0 2.5 5.649 2.5 12C2.5 18.351 8.14875 24 14.5 24C20.8512 24 26.5 18.351 26.5 12Z" fill="currentColor"></path>
            <path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z" fill="white"></path>
            <path d="M0 12C0 5.37259 5.37259 0 12 0V24C5.37259 24 0 18.6274 0 12Z" fill="currentColor"></path>
          </svg>
        </div>
      )}
      <SidebarTrigger className={cn("text-light-gray-700", state === "collapsed" && "hidden")} />
    </div>
  );
};

export default SidebarLogo;
