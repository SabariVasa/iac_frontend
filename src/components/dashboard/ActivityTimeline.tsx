
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, ShoppingCart, Mail, MessageSquare } from "lucide-react";

interface TimelineItem {
  id: number;
  icon: JSX.Element;
  iconBg: string;
  title: string;
  time: string;
  description?: string;
  user?: {
    name: string;
    avatarUrl?: string;
    initials?: string;
  };
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    icon: <FileText className="h-4 w-4 text-white" />,
    iconBg: "bg-primary-500",
    title: "Report generated",
    time: "3:30 PM",
    description: "Weekly analytics report was successfully generated",
  },
  {
    id: 2,
    icon: <ShoppingCart className="h-4 w-4 text-white" />,
    iconBg: "bg-success",
    title: "New order received",
    time: "2:45 PM",
    description: "Order #7643 was placed by",
    user: {
      name: "David Martin",
      initials: "DM",
    },
  },
  {
    id: 3,
    icon: <Mail className="h-4 w-4 text-white" />,
    iconBg: "bg-warning",
    title: "Email campaign delivered",
    time: "1:10 PM",
    description: "Spring promotion campaign was sent to 5,231 subscribers",
  },
  {
    id: 4,
    icon: <MessageSquare className="h-4 w-4 text-white" />,
    iconBg: "bg-info",
    title: "New support ticket",
    time: "11:30 AM",
    description: "Ticket #3251 was created by",
    user: {
      name: "Sarah Taylor",
      initials: "ST",
    },
  },
];

const ActivityTimeline = () => {
  return (
    <Card className="shadow-card border-0">
      <CardHeader className="pb-2 pt-6 px-6">
        <h3 className="card-title">Recent Activity</h3>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="space-y-6">
          {timelineData.map((item) => (
            <div key={item.id} className="relative pl-6">
              {/* Timeline connector */}
              {item.id < timelineData.length && (
                <div className="absolute left-2.5 top-3 bottom-[-24px] w-[1px] bg-light-gray-300"></div>
              )}
              <div className="flex">
                {/* Icon */}
                <div className={`absolute left-0 top-0 flex h-5 w-5 items-center justify-center rounded-full ${item.iconBg}`}>
                  {item.icon}
                </div>
                {/* Content */}
                <div>
                  <div className="flex items-center">
                    <h4 className="text-sm font-medium text-light-gray-900">{item.title}</h4>
                    <span className="ml-2 text-xs text-light-gray-500">{item.time}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-light-gray-700">
                    {item.description}
                    {item.user && (
                      <span className="ml-1 inline-flex items-center">
                        <Avatar className="ml-1 mr-1 h-5 w-5">
                          <AvatarImage src={item.user.avatarUrl} />
                          <AvatarFallback className="text-xs">
                            {item.user.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{item.user.name}</span>
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
