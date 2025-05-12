
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
  className?: string;
  iconColor?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  trend,
  description,
  className,
  iconColor = "text-primary-500",
}: StatCardProps) => {
  return (
    <Card className={cn("shadow-card border-0", className)}>
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-light-gray-700">{title}</span>
          <div className={cn("rounded-md p-2", iconColor, "bg-opacity-10")}>
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4 px-4">
        <div className="text-2xl font-semibold">{value}</div>
        {trend && (
          <div className="mt-1 flex items-center">
            <span
              className={cn(
                "mr-1 flex items-center text-xs",
                trend.isPositive ? "text-success" : "text-danger"
              )}
            >
              {trend.isPositive ? (
                <ArrowUp className="mr-0.5 h-3 w-3" />
              ) : (
                <ArrowDown className="mr-0.5 h-3 w-3" />
              )}
              {Math.abs(trend.value)}%
            </span>
            {description && (
              <span className="text-xs text-light-gray-500">{description}</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
