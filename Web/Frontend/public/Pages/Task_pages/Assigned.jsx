import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Assigned = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([
    { id: 'T-12345', name: "Tender Approval", date: "2024-11-27", reqby: "Prasad Mahankal", category: "Permission", status: "Assigned", action: "None", description: "Tender approval required for new office supplies procurement", priority: "High", completionDate: "2024-11-26 15:30", documents: [{ name: "tender_doc.pdf", type: "PDF" }, { name: "cost_analysis.xlsx", type: "Excel" }], declineReason: '', declineMessage: '' },
    { id: 'T-12346', name: "Budget Allocation", date: "2024-12-01", reqby: "Pranav Patil", category: "Budget", status: "Pending", action: "Approve", description: "Annual budget allocation for IT department infrastructure upgrades", priority: "High", completionDate: "2024-11-30 14:45", documents: [{ name: "budget_proposal.pdf", type: "PDF" }, { name: "financial_forecast.xlsx", type: "Excel" }], declineReason: '', declineMessage: '' },
    { id: 'T-12347', name: "Data Sharing Agreement", date: "2024-12-03", reqby: "Siddhesh Patil", category: "Data sharing", status: "Assigned", action: "None", description: "Data sharing agreement with external vendor for cloud services", priority: "Medium", completionDate: "2024-12-02 11:20", documents: [{ name: "agreement_draft.pdf", type: "PDF" }], declineReason: '', declineMessage: '' },
    { id: 'T-12348', name: "Infrastructure Development", date: "2024-12-05", reqby: "Payal Pawar", category: "General", status: "Pending", action: "Approve", description: "Server room expansion and network infrastructure upgrade", priority: "Critical", completionDate: "2024-12-04 16:15", documents: [{ name: "infrastructure_plan.pdf", type: "PDF" }], declineReason: '', declineMessage: '' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [declineModal, setDeclineModal] = useState(false);
  const [declineReason, setDeclineReason] = useState('');
  const [declineMessage, setDeclineMessage] = useState('');
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  const handleApproveClick = (request) => navigate('/Approve');
  const handleDecline = (id) => { setSelectedRequestId(id); setDeclineModal(true); };
  const handleSubmitDecline = () => {
    setRequests(requests.map(r => r.id === selectedRequestId ? { ...r, status: 'Declined', action: 'None', declineReason, declineMessage } : r));
    setDeclineModal(false); setDeclineReason(''); setDeclineMessage(''); setSelectedRequestId(null);
  };

  const filteredRequests = requests.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || r.category === selectedCategory)
  );

  const getStatusClass = (status) => {
    switch(status){
      case 'Approved': return 'bg-green-100 text-green-700 font-semibold';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 font-semibold';
      case 'Declined': return 'bg-red-100 text-red-700 font-semibold';
      case 'Assigned': return 'bg-blue-100 text-blue-700 font-semibold';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

  return (
    <div className="mx-auto p-6 min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50">
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-700">Assigned Requests</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search by task name..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 pl-10 shadow-sm focus:ring-2 focus:ring-indigo-400"
          />
          <FiSearch className="absolute left-3 top-2 text-gray-500" />
        </div>
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">All Categories</option>
          <option value="General">General</option>
          <option value="Permission">Permission</option>
          <option value="Budget">Budget</option>
          <option value="Data sharing">Data sharing</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md bg-white">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-indigo-100">
            <tr>
              <th className="px-4 py-2 text-left text-indigo-700">ID</th>
              <th className="px-4 py-2 text-left text-indigo-700">Task Name</th>
              <th className="px-4 py-2 text-left text-indigo-700">Date</th>
              <th className="px-4 py-2 text-left text-indigo-700">Requested By</th>
              <th className="px-4 py-2 text-left text-indigo-700">Category</th>
              <th className="px-4 py-2 text-left text-indigo-700">Status</th>
              <th className="px-4 py-2 text-left text-indigo-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map(r => (
              <tr key={r.id} className="border-b hover:bg-indigo-50 transition">
                <td className="px-4 py-2">{r.id}</td>
                <td className="px-4 py-2">{r.name}</td>
                <td className="px-4 py-2">{r.date}</td>
                <td className="px-4 py-2">{r.reqby}</td>
                <td className="px-4 py-2">{r.category}</td>
                <td className={`px-4 py-2 rounded-full text-center ${getStatusClass(r.status)}`}>{r.status}</td>
                <td className="px-4 py-2 flex flex-col md:flex-row gap-2">
                  {r.action === 'Approve' && (
                    <>
                      <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition" onClick={() => handleApproveClick(r)}>Approve</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition" onClick={() => handleDecline(r.id)}>Decline</button>
                    </>
                  )}
                  {r.status === 'Declined' && (
                    <div className="text-red-700 text-sm">
                      <div><strong>Reason:</strong> {r.declineReason}</div>
                      {r.declineMessage && <div>{r.declineMessage}</div>}
                    </div>
                  )}
                  {r.action === 'None' && r.status !== 'Declined' && <span className="text-gray-500 italic">No action required</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {declineModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Decline Request</h2>
            <label className="block text-gray-700 mb-2">Reason</label>
            <select
              className="w-full p-2 border rounded mb-4"
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
            >
              <option value="">Select a reason</option>
              <option value="Improper Docs">Improper Docs</option>
              <option value="Incorrect info">Incorrect information</option>
              <option value="Other">Other</option>
            </select>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              className="w-full p-2 border rounded mb-4"
              rows={4}
              value={declineMessage}
              onChange={(e) => setDeclineMessage(e.target.value)}
              placeholder="Additional details..."
            />
            <div className="flex justify-end gap-2">
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition" onClick={handleSubmitDecline}>Submit</button>
              <button className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500 transition" onClick={() => setDeclineModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assigned;
