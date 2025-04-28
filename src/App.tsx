import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, Settings, Users, Activity, BarChart3 } from 'lucide-react';

// Components
const Sidebar = () => (
  <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 p-4">
    <div className="flex items-center gap-2 mb-8">
      <LayoutDashboard className="w-6 h-6" />
      <h1 className="text-xl font-bold">Dashboard</h1>
    </div>
    <nav>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded">
            <BarChart3 className="w-5 h-5" />
            Analytics
          </Link>
        </li>
        <li>
          <Link to="/users" className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded">
            <Users className="w-5 h-5" />
            Users
          </Link>
        </li>
        <li>
          <Link to="/activity" className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded">
            <Activity className="w-5 h-5" />
            Activity
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

// Pages
const Analytics = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        { title: 'Total Users', value: '1,234' },
        { title: 'Active Users', value: '891' },
        { title: 'Revenue', value: '$12,345' }
      ].map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-gray-500 text-sm">{stat.title}</h3>
          <p className="text-2xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const UsersPage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Users</h2>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            { name: 'John Doe', email: 'john@example.com', status: 'Active' },
            { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
          ].map((user, index) => (
            <tr key={index}>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Activity = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Activity Log</h2>
    <div className="space-y-4">
      {[
        { action: 'User Login', user: 'John Doe', time: '2 minutes ago' },
        { action: 'Settings Updated', user: 'Jane Smith', time: '1 hour ago' },
      ].map((activity, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{activity.action}</p>
              <p className="text-sm text-gray-500">by {activity.user}</p>
            </div>
            <span className="text-sm text-gray-500">{activity.time}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Settings = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Settings</h2>
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Site Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            defaultValue="My Dashboard"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Notifications</label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
              <span className="ml-2">Enable email notifications</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        <div className="ml-64">
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;