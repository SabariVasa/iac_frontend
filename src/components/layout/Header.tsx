
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Search,
  Bell,
  MessageSquare,
  ShoppingCart,
  User,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggler from "../ui/ThemeToggler";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className={cn(
      "sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-light-gray-300 bg-white px-4 shadow-sm lg:px-6",
      className
    )}>
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-light-gray-700" />
        
        {!searchVisible && !isMobile && (
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-light-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] bg-light-gray-200 border-0 pl-9"
              />
            </div>
          </form>
        )}
        
        {isMobile && (
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <Search className="h-5 w-5" />
          </Button>
        )}
      </div>

      {searchVisible && isMobile && (
        <div className="absolute inset-x-0 top-0 z-40 flex h-16 items-center justify-between bg-white px-4">
          <form className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-light-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-light-gray-200 border-0 pl-9"
                autoFocus
              />
            </div>
          </form>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchVisible(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-light-gray-700" />
              <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center bg-danger">
                <span className="text-[10px]">3</span>
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[320px]">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[320px] overflow-y-auto">
              {/* Notification Items */}
              <div className="p-2">
                <div className="flex items-start gap-2 rounded-md p-2 hover:bg-light-gray-100">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>EC</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">
                      <span className="font-semibold">Emma Charles</span> purchased{" "}
                      <span className="font-semibold">Falcon</span>
                    </p>
                    <span className="text-xs text-light-gray-500">
                      30 minutes ago
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-md p-2 hover:bg-light-gray-100">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JR</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">
                      <span className="font-semibold">John Rawlings</span> created a{" "}
                      <span className="font-semibold">new task</span>
                    </p>
                    <span className="text-xs text-light-gray-500">
                      1 hour ago
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-md p-2 hover:bg-light-gray-100">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">
                      <span className="font-semibold">Mark Rogers</span> shared{" "}
                      <span className="font-semibold">April Earnings Report</span>
                    </p>
                    <span className="text-xs text-light-gray-500">
                      3 hours ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <div className="p-2 text-center">
              <Link
                to="/notifications"
                className="text-xs font-medium text-primary-500 hover:underline"
              >
                View all notifications
              </Link>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="h-5 w-5 text-light-gray-700" />
              <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center bg-danger">
                <span className="text-[10px]">5</span>
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[320px]">
            <DropdownMenuLabel>Messages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[320px] overflow-y-auto">
              {/* Message Items */}
              <div className="p-2">
                <div className="flex items-start gap-2 rounded-md p-2 hover:bg-light-gray-100">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>EC</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">Emma Charles</p>
                    <span className="text-xs text-light-gray-500 line-clamp-1">
                      Hey! I just wanted to check in on the project status.
                    </span>
                    <span className="text-xs text-light-gray-500">5m ago</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-md p-2 hover:bg-light-gray-100">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JR</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">John Rawlings</p>
                    <span className="text-xs text-light-gray-500 line-clamp-1">
                      The new feature is ready for testing, please review when you have time.
                    </span>
                    <span className="text-xs text-light-gray-500">2h ago</span>
                  </div>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <div className="p-2 text-center">
              <Link
                to="/messages"
                className="text-xs font-medium text-primary-500 hover:underline"
              >
                View all messages
              </Link>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-light-gray-700" />
              <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center bg-danger">
                <span className="text-[10px]">2</span>
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[320px]">
            <DropdownMenuLabel>Cart</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[320px] overflow-y-auto">
              {/* Cart Items */}
              <div className="p-2">
                <div className="flex items-start gap-2 rounded-md p-2 hover:bg-light-gray-100">
                  <div className="h-12 w-12 rounded-md bg-light-gray-200"></div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">Falcon Admin Template</p>
                    <span className="text-xs text-light-gray-500">
                      1 × $29.99
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-md p-2 hover:bg-light-gray-100">
                  <div className="h-12 w-12 rounded-md bg-light-gray-200"></div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">Premium Support</p>
                    <span className="text-xs text-light-gray-500">
                      1 × $9.99
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <div className="p-2">
              <div className="flex justify-between pb-2">
                <span className="text-sm">Subtotal:</span>
                <span className="text-sm font-medium">$39.98</span>
              </div>
              <div className="flex gap-2">
                <Button className="w-full" size="sm" variant="outline">
                  View Cart
                </Button>
                <Button className="w-full bg-primary-500 hover:bg-primary-600" size="sm">
                  Checkout
                </Button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeToggler />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full border-light-gray-300"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex flex-col items-center gap-2 p-3">
              <Avatar className="h-14 w-14">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-sm font-medium">Lisa Robbins</p>
                <p className="text-xs text-light-gray-500">lisa@example.com</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
