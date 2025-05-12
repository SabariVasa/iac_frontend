
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", earnings: 4000 },
  { month: "Feb", earnings: 6000 },
  { month: "Mar", earnings: 8000 },
  { month: "Apr", earnings: 7000 },
  { month: "May", earnings: 9000 },
  { month: "Jun", earnings: 11000 },
  { month: "Jul", earnings: 10000 },
  { month: "Aug", earnings: 12000 },
  { month: "Sep", earnings: 14000 },
  { month: "Oct", earnings: 16000 },
  { month: "Nov", earnings: 15000 },
  { month: "Dec", earnings: 18000 },
];

const SalesChart = () => {
  const [chartData] = useState(data);

  return (
    <Card className="shadow-card border-0">
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6 px-6">
        <h3 className="card-title">Total Sales</h3>
        <div className="flex items-center gap-2">
          <select className="h-8 rounded-md border border-light-gray-300 bg-white px-3 text-sm focus:border-primary-400 focus:outline-none">
            <option value="currentYear">Current Year</option>
            <option value="lastYear">Last Year</option>
          </select>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEEEEE" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#748194' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#748194' }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, "Earnings"]}
                labelStyle={{ color: "#344050", fontWeight: 600 }}
                contentStyle={{ 
                  backgroundColor: "white",
                  borderRadius: "0.375rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "1px solid #E3E6ED"
                }}
              />
              <Bar dataKey="earnings" fill="#2C7BE5" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
