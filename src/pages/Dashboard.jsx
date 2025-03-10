import React from 'react';
import { 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Package, 
  Heart,
  Settings,
  Menu,
  Bell,
  Search,
  Flag,
  CircleDollarSign
} from 'lucide-react';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Main Content */}
      <main className="flex-1">

        {/* Dashboard Content */}
        <div className="p-0">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { title: 'Total Sales', value: '$12,426', change: '+8.2%', icon: CircleDollarSign, color: 'bg-purple-500' },
              { title: 'Active Customers', value: '2,453', change: '+12.5%', icon: Users, color: 'bg-pink-500' },
              { title: 'New Orders', value: '456', change: '+4.7%', icon: Package, color: 'bg-blue-500' },
              { title: 'Revenue', value: '$6,927', change: '+9.1%', icon: TrendingUp, color: 'bg-green-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                    <span className="text-sm text-green-500">{stat.change}</span>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon size={24} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Orders</h2>
              <button className="text-purple-600 hover:text-purple-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Order ID</th>
                    <th className="text-left py-3 px-4">Customer</th>
                    <th className="text-left py-3 px-4">Product</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#PRD-124', customer: 'Alex Rivera', product: 'Pride Rainbow Tee', amount: '$29.99', status: 'Delivered' },
                    { id: '#PRD-123', customer: 'Sam Chen', product: 'Trans Flag Hoodie', amount: '$49.99', status: 'Processing' },
                    { id: '#PRD-122', customer: 'Jordan Lee', product: 'Rainbow Accessories Set', amount: '$34.99', status: 'Shipped' },
                    { id: '#PRD-121', customer: 'Taylor Kim', product: 'Pride Denim Jacket', amount: '$89.99', status: 'Pending' },
                  ].map((order, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-3 px-4">{order.id}</td>
                      <td className="py-3 px-4">{order.customer}</td>
                      <td className="py-3 px-4">{order.product}</td>
                      <td className="py-3 px-4">{order.amount}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;