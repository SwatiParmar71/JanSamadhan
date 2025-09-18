import React, { useState } from "react";
import { ThumbsDown, AlertCircle, CheckCircle2, LayoutGrid, List } from "lucide-react";

const ComplaintsPage = () => {
  const [view, setView] = useState("table"); // table | card | list

  const [complaints] = useState([
    {
      id: "C101",
      name: "Rahul Kumar",
      service: "Streetlight Repair",
      date: "2025-09-12",
      location: "Ranchi, Jharkhand",
      status: "Not Solved",
      feedback: "Light still not working after visit",
    },
    {
      id: "C102",
      name: "Anjali Singh",
      service: "Garbage Collection",
      date: "2025-09-10",
      location: "Dhanbad, Jharkhand",
      status: "Not Satisfactory",
      feedback: "Garbage picked up but area left dirty",
    },
    {
      id: "C103",
      name: "Suresh Das",
      service: "Water Supply",
      date: "2025-09-08",
      location: "Jamshedpur, Jharkhand",
      status: "Solved",
      feedback: "Issue resolved, water supply restored",
    },
    {
      id: "C104",
      name: "Priya Verma",
      service: "Road Repair",
      date: "2025-09-07",
      location: "Hazaribagh, Jharkhand",
      status: "Not Solved",
      feedback: "Potholes still not filled properly",
    },
    {
      id: "C105",
      name: "Amit Yadav",
      service: "Drainage Cleaning",
      date: "2025-09-06",
      location: "Bokaro, Jharkhand",
      status: "Solved",
      feedback: "Drainage cleaned well, no flooding now",
    },
    {
      id: "C106",
      name: "Neha Kumari",
      service: "Public Toilet Maintenance",
      date: "2025-09-05",
      location: "Giridih, Jharkhand",
      status: "Not Satisfactory",
      feedback: "Toilet cleaned but water supply missing",
    },
    {
      id: "C107",
      name: "Ravi Shankar",
      service: "Street Sweeping",
      date: "2025-09-04",
      location: "Deoghar, Jharkhand",
      status: "Solved",
      feedback: "Area looks clean now",
    },
    {
      id: "C108",
      name: "Meena Kumari",
      service: "Water Pipeline Leakage",
      date: "2025-09-03",
      location: "Chatra, Jharkhand",
      status: "Not Solved",
      feedback: "Leakage still continues near my house",
    },
    {
      id: "C109",
      name: "Sunil Mishra",
      service: "Garbage Collection",
      date: "2025-09-02",
      location: "Latehar, Jharkhand",
      status: "Solved",
      feedback: "Garbage collected on time",
    },
    {
      id: "C110",
      name: "Pooja Sharma",
      service: "Streetlight Repair",
      date: "2025-09-01",
      location: "Palamu, Jharkhand",
      status: "Not Satisfactory",
      feedback: "Some lights fixed, some still not working",
    },
  ]);

  const getStatusBadge = (status) => {
    if (status === "Solved") {
      return (
        <span className="flex items-center gap-1 text-green-600 font-semibold">
          <CheckCircle2 size={18} /> Solved
        </span>
      );
    }
    if (status === "Not Solved") {
      return (
        <span className="flex items-center gap-1 text-red-600 font-semibold">
          <AlertCircle size={18} /> Not Solved
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1 text-yellow-600 font-semibold">
        <ThumbsDown size={18} /> Not Satisfactory
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6 drop-shadow">
        📝 Service Complaints – Jharkhand
      </h1>

      {/* View Switch Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setView("table")}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 shadow ${
            view === "table"
              ? "bg-green-700 text-white"
              : "bg-white text-green-700 border border-green-300"
          }`}
        >
          <LayoutGrid size={18} /> Table View
        </button>
        <button
          onClick={() => setView("card")}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 shadow ${
            view === "card"
              ? "bg-green-700 text-white"
              : "bg-white text-green-700 border border-green-300"
          }`}
        >
          <LayoutGrid size={18} /> Card View
        </button>
        <button
          onClick={() => setView("list")}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 shadow ${
            view === "list"
              ? "bg-green-700 text-white"
              : "bg-white text-green-700 border border-green-300"
          }`}
        >
          <List size={18} /> List View
        </button>
      </div>

      {/* Table View */}
      {view === "table" && (
        <div className="overflow-x-auto bg-white shadow-2xl rounded-xl border border-green-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-3">Complaint ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Service</th>
                <th className="p-3">Date</th>
                <th className="p-3">Location</th>
                <th className="p-3">Status</th>
                <th className="p-3">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((c, index) => (
                <tr
                  key={c.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-green-50" : "bg-white"
                  } hover:bg-green-100 transition`}
                >
                  <td className="p-3 font-semibold text-gray-700">{c.id}</td>
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
      )}

      {/* Card View */}
      {view === "card" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {complaints.map((c) => (
            <div
              key={c.id}
              className="bg-white shadow-xl rounded-xl p-4 border border-green-200 hover:shadow-2xl transition"
            >
              <h2 className="font-bold text-lg text-green-700 mb-2">
                {c.service}
              </h2>
              <p>
                <span className="font-semibold">Complaint ID:</span> {c.id}
              </p>
              <p>
                <span className="font-semibold">Name:</span> {c.name}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {c.date}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {c.location}
              </p>
              <p className="mt-2">{getStatusBadge(c.status)}</p>
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">Feedback:</span> {c.feedback}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {view === "list" && (
        <ul className="bg-white shadow-2xl rounded-xl divide-y divide-green-200 border border-green-200">
          {complaints.map((c) => (
            <li key={c.id} className="p-4 hover:bg-green-50 transition">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-green-700">{c.service}</p>
                  <p className="text-sm text-gray-600">
                    {c.name} • {c.location} • {c.date}
                  </p>
                  <p className="text-gray-700">{c.feedback}</p>
                </div>
                <div>{getStatusBadge(c.status)}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComplaintsPage;
