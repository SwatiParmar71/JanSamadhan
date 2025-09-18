import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Approval = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([
    // your requests array remains unchanged
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [declineModal, setDeclineModal] = useState(false);
  const [declineReason, setDeclineReason] = useState('');
  const [declineMessage, setDeclineMessage] = useState('');
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  const handleApproveClick = (request) => {
    navigate('/Approve');
  };

  const handleDecline = (id) => {
    setSelectedRequestId(id);
    setDeclineModal(true);
  };

  const handleSubmitDecline = () => {
    setRequests(requests.map(request =>
      request.id === selectedRequestId 
        ? { ...request, status: 'Declined', declineReason, declineMessage } 
        : request
    ));
    setDeclineModal(false);
    setDeclineReason('');
    setDeclineMessage('');
  };

  const filteredRequests = requests.filter(request =>
    request.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || request.category === selectedCategory)
  );

  const renderDeclineDetails = (request) => {
    if (request.status === 'Declined') {
      return (
        <div className="text-sm text-red-600">
          <div><strong>Reason:</strong> {request.declineReason}</div>
          {request.declineMessage && (
            <div className="mt-1"><strong>Message:</strong> {request.declineMessage}</div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-indigo-700">Incoming Requests</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search by task name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 pl-10 focus:ring-2 focus:ring-indigo-400 transition"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch className="text-gray-500" />
          </div>
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 transition"
        >
          <option value="">All Categories</option>
          <option value="General">General</option>
          <option value="Permission">Permission</option>
          <option value="Budget">Budget</option>
          <option value="Data sharing">Data sharing</option>
          <option value="Documentation">Documentation</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-lg border border-gray-300">
          <thead className="bg-indigo-100 text-indigo-800 uppercase text-sm font-semibold">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Task Name</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Requested By</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map(request => (
              <tr key={request.id} className="border-b text-center hover:bg-gray-50 transition">
                <td className="px-4 py-2 font-medium">{request.id}</td>
                <td className="px-4 py-2">{request.name}</td>
                <td className="px-4 py-2">{request.date}</td>
                <td className="px-4 py-2">{request.reqby}</td>
                <td className="px-4 py-2">{request.category}</td>
                <td className={`px-4 py-2 ${getStatusClass(request.status)}`}>{request.status}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-col items-center gap-2">
                    {request.status === 'Pending' ? (
                      <>
                        <button
                          className="bg-indigo-600 text-white py-1 px-4 rounded-xl hover:bg-indigo-700 transition"
                          onClick={() => handleApproveClick(request)}
                        >
                          Approve
                        </button>
                        <button
                          className="bg-red-600 text-white py-1 px-4 rounded-xl hover:bg-red-700 transition"
                          onClick={() => handleDecline(request.id)}
                        >
                          Decline
                        </button>
                      </>
                    ) : (
                      renderDeclineDetails(request)
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Decline Modal */}
      {declineModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-80">
            <h2 className="text-xl font-bold mb-4 text-red-600">Decline Request</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="declineReason">Reason</label>
              <select
                id="declineReason"
                value={declineReason}
                onChange={(e) => setDeclineReason(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-red-400 transition"
              >
                <option value="">Select a reason</option>
                <option value="Improper Docs">Improper Docs</option>
                <option value="Incorrect info">Incorrect information</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="declineMessage">Additional Message</label>
              <textarea
                id="declineMessage"
                value={declineMessage}
                onChange={(e) => setDeclineMessage(e.target.value)}
                rows="4"
                className="w-full border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-red-400 transition"
                placeholder="Enter additional details..."
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                className="bg-indigo-600 text-white py-1 px-4 rounded-xl hover:bg-indigo-700 transition"
                onClick={handleSubmitDecline}
              >
                Submit
              </button>
              <button
                className="bg-gray-400 text-white py-1 px-4 rounded-xl hover:bg-gray-500 transition"
                onClick={() => setDeclineModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getStatusClass = (status) => {
  switch (status) {
    case 'Approved':
      return 'text-green-600 font-bold';
    case 'Pending':
      return 'text-gray-600';
    case 'Declined':
      return 'text-red-600 font-bold';
    default:
      return 'text-gray-500';
  }
};

export default Approval;
