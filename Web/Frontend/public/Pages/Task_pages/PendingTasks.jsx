import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PendingTasks = () => {
  const navigate = useNavigate();

  // Sample Pending Tasks
  const pendingTasks = [
    { id: 'C-101', name: 'Streetlight not working', date: '09/10/24', assignedBy: 'Ward Officer', department: 'Electricity' },
    { id: 'C-104', name: 'Broken road patch', date: '09/13/24', assignedBy: 'PWD', department: 'Roads' },
    { id: 'C-105', name: 'Water leakage on road', date: '09/15/24', assignedBy: 'Water Supply', department: 'Water Dept.' },
  ];

  return (
    <div className="p-6 bg-gradient-to-tr from-indigo-50 via-gray-50 to-teal-50 min-h-screen">
      {/* Header with Back */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-600"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800 text-center flex-grow">
          My Pending Tasks
        </h1>
      </div>

      {/* Tasks Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-700 text-left">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Complaint</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Raised By</th>
                <th className="px-4 py-3">Department</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingTasks.map((task) => (
                <tr key={task.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{task.id}</td>
                  <td className="px-4 py-3">{task.name}</td>
                  <td className="px-4 py-3">{task.date}</td>
                  <td className="px-4 py-3">{task.assignedBy}</td>
                  <td className="px-4 py-3">{task.department}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => navigate(`/Task/${task.id}`)}
                      className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Optional Pagination */}
        <div className="flex justify-between items-center p-4 border-t">
          <p className="text-sm text-gray-500">Showing {pendingTasks.length} pending tasks</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-lg">&lt;</button>
            <button className="px-3 py-1 border rounded-lg bg-indigo-600 text-white">1</button>
            <button className="px-3 py-1 border rounded-lg">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingTasks;
