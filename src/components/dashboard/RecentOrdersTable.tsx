
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  date: string;
  amount: string;
  status: "Completed" | "Processing" | "Cancelled" | "Pending";
}

const orders: Order[] = [
  {
    id: "#2737",
    customer: {
      name: "Jane Smith",
      email: "jane@example.com",
    },
    date: "Apr 21, 2023",
    amount: "$289.50",
    status: "Completed",
  },
  {
    id: "#2736",
    customer: {
      name: "Robert Johnson",
      email: "robert@example.com",
    },
    date: "Apr 20, 2023",
    amount: "$129.99",
    status: "Processing",
  },
  {
    id: "#2735",
    customer: {
      name: "Emily Clark",
      email: "emily@example.com",
    },
    date: "Apr 19, 2023",
    amount: "$499.99",
    status: "Pending",
  },
  {
    id: "#2734",
    customer: {
      name: "Michael Chen",
      email: "michael@example.com",
    },
    date: "Apr 18, 2023",
    amount: "$39.99",
    status: "Cancelled",
  },
  {
    id: "#2733",
    customer: {
      name: "Sarah Wilson",
      email: "sarah@example.com",
    },
    date: "Apr 17, 2023",
    amount: "$149.50",
    status: "Completed",
  },
];

const getStatusClass = (status: Order["status"]) => {
  const classes = {
    Completed: "bg-success-100 text-success-700",
    Processing: "bg-info-100 text-info-700",
    Cancelled: "bg-danger-100 text-danger-700",
    Pending: "bg-warning-100 text-warning-700",
  };
  return classes[status];
};

const RecentOrdersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  
  return (
    <Card className="shadow-card border-0">
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-6 px-6">
        <h3 className="card-title">Recent Orders</h3>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-light-gray-500" />
          <input
            type="text"
            placeholder="Search orders"
            className="h-8 w-[180px] rounded-md border border-light-gray-300 bg-white pl-8 text-sm focus:border-primary-400 focus:outline-none"
          />
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-light-gray-300 hover:bg-transparent">
                <TableHead className="text-light-gray-700">Order</TableHead>
                <TableHead className="text-light-gray-700">Customer</TableHead>
                <TableHead className="text-light-gray-700">Date</TableHead>
                <TableHead className="text-right text-light-gray-700">Amount</TableHead>
                <TableHead className="text-light-gray-700">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="border-light-gray-300 hover:bg-light-gray-50">
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.customer.name}</p>
                      <p className="text-xs text-light-gray-500">{order.customer.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell className="text-right font-medium">{order.amount}</TableCell>
                  <TableCell>
                    <Badge className={getStatusClass(order.status)} variant="outline">
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-light-gray-500">
            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, orders.length)} to {Math.min(currentPage * itemsPerPage, orders.length)} of {orders.length} entries
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrdersTable;
