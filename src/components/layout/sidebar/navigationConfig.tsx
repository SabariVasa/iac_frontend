
import React from "react";
import { Home, Layers, ShoppingCart, Users, Calendar, BarChart2, MessageSquare, Mail, Settings } from "lucide-react";

// Define navigation groups and items
export const navigationConfig = [
  {
    type: "item",
    path: "/",
    icon: <Home className="h-4 w-4" />,
    label: "Home"
  },
  {
    type: "group",
    label: "Apps",
    icon: <Layers className="h-4 w-4" />,
    children: [
      {
        path: "/apps/calendar",
        icon: <Calendar className="h-4 w-4" />,
        label: "Calendar"
      },
      {
        path: "/apps/chat",
        icon: <MessageSquare className="h-4 w-4" />,
        label: "Chat"
      },
      {
        path: "/apps/email",
        icon: <Mail className="h-4 w-4" />,
        label: "Email"
      }
    ]
  },
  {
    type: "group",
    label: "Pages",
    icon: <Layers className="h-4 w-4" />,
    children: [
      {
        path: "/pages/users",
        icon: <Users className="h-4 w-4" />,
        label: "Users"
      },
      {
        path: "/pages/ecommerce",
        icon: <ShoppingCart className="h-4 w-4" />,
        label: "E-Commerce"
      }
    ]
  },
  {
    type: "group",
    label: "Charts",
    icon: <BarChart2 className="h-4 w-4" />,
    children: [
      {
        path: "/charts/bar",
        icon: <BarChart2 className="h-4 w-4" />,
        label: "Bar Charts"
      },
      {
        path: "/charts/line",
        icon: <BarChart2 className="h-4 w-4" />,
        label: "Line Charts"
      }
    ]
  },
  {
    type: "item",
    path: "/settings",
    icon: <Settings className="h-4 w-4" />,
    label: "Settings"
  }
];
