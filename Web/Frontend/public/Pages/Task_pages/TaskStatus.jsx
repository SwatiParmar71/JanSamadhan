import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  Plus,
  CheckCircle2,
  AlertCircle,
  ThumbsDown,
} from "lucide-react";

const ComplaintsDashboard = () => {
  const navigate = useNavigate();

  const complaints = [
    { id: "C101", name: "Rahul Kumar", service: "Streetlight Repair", date: "2025-09-12", location: "Ranchi, Jharkhand", status: "Not Solved", feedback: "Light still not working" },
    { id: "C102", name: "Anjali Singh", service: "Garbage Collection", date: "2025-09-10", location: "Dhanbad, Jharkhand", status: "Not Satisfactory", feedback: "Area left dirty" },
    { id: "C103", name: "Suresh Das", service: "Water Supply", date: "2025-09-08", location: "Jamshedpur, Jharkhand", status: "Solved", feedback: "Water supply restored" },
    { id: "C104", name: "Pooja Verma", service: "Drainage Cleaning", date: "2025-09-07", location: "Hazaribagh, Jharkhand", status: "Not Solved", feedback: "Drain still blocked" },
  ];

  const getStatusBadge = (status) => {
    if (status === "Solved") {
      return (
        <span className="flex items-center gap-1 text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full">
          <CheckCircle2 size={16} /> Solved
        </span>
      );
    }
    if (status === "Not Solved") {
      return (
        <span className="flex items-center gap-1 text-red-600 font-medium bg-red-100 px-2 py-1 rounded-full">
          <AlertCircle size={16} /> Not Solved
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1 text-yellow-600 font-medium bg-yellow-100 px-2 py-1 rounded-full">
        <ThumbsDown size={16} /> Not Satisfactory
      </span>
    );
  };

  const solvedCount = complaints.filter((c) => c.status === "Solved").length;
  const pendingCount = complaints.filter((c) => c.status === "Not Solved").length;
  const unsatCount = complaints.filter((c) => c.status === "Not Satisfactory").length;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-green-700">
          📝 Public Service Complaints – Jharkhand
        </h1>
        <p className="text-gray-600 mt-2">
          Track and manage complaints related to public services across districts of Jharkhand.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Solved</p>
            <h2 className="text-2xl font-bold text-green-700">{solvedCount}</h2>
          </div>
          <CheckCircle2 className="text-green-700" size={28} />
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Not Solved</p>
            <h2 className="text-2xl font-bold text-red-700">{pendingCount}</h2>
          </div>
          <AlertCircle className="text-red-700" size={28} />
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Not Satisfactory</p>
            <h2 className="text-2xl font-bold text-yellow-700">{unsatCount}</h2>
          </div>
          <ThumbsDown className="text-yellow-700" size={28} />
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search complaints..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex items-center px-4 py-2 border rounded-md">
            <Filter size={18} className="mr-2" /> Filters
          </button>
          <button
            onClick={() => navigate("/RegisterComplaint")}
            className="flex items-center px-4 py-2 bg-green-700 text-white rounded-md"
          >
            <Plus size={18} className="mr-2" /> Register Complaint
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full min-w-[700px] border-collapse">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c, i) => (
              <tr
                key={c.id}
                className={`${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-green-50 transition`}
              >
                <td className="p-3">{c.id}</td>
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.service}</td>
                <td className="p-3">{c.date}</td>
                <td className="p-3">{c.location}</td>
                <td className="p-3">{getStatusBadge(c.status)}</td>
                <td className="p-3 text-gray-700">{c.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 border-t bg-white mt-4 rounded-lg shadow">
        <div className="flex space-x-2">
          <button className="px-2 py-1 border rounded-md">&lt;</button>
          <button className="px-2 py-1 border rounded-md bg-green-700 text-white">
            1
          </button>
          <button className="px-2 py-1 border rounded-md">2</button>
          <span className="px-2 py-1">...</span>
          <button className="px-2 py-1 border rounded-md">7</button>
          <button className="px-2 py-1 border rounded-md">8</button>
          <button className="px-2 py-1 border rounded-md">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsDashboard;
