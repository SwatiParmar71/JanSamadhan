import React from 'react';

const Approve = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Task Header */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-500">
            <div className="border-b pb-4 mb-4">
              <h1 className="text-2xl font-bold text-indigo-700">Permission for Inspection</h1>
              <p className="text-sm text-gray-500 mt-1">Task ID: #TK-2024-091</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Assigned By</h3>
                <p className="mt-1 text-gray-900 font-medium">Prasad Mahankal</p>
                <p className="text-sm text-gray-500">Head Water Department</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                <p className="mt-1 text-gray-900 font-medium">17/09/2024</p>
                <p className="text-sm text-gray-500">15:40</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Priority</h3>
                <p className="mt-1 text-lg font-semibold text-yellow-600">Medium</p>
                <div className="h-1 w-1/4 bg-yellow-500 mt-2 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Deadline</h3>
                <p className="mt-1 text-gray-900 font-medium">24/09/2024</p>
                <p className="text-sm text-gray-500">7 days remaining</p>
              </div>
            </div>
          </div>

          {/* Task Details */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-purple-500">
            <h2 className="text-lg font-bold text-purple-700 mb-4">Task Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Description</h3>
                <p className="mt-1 text-gray-900">Please grant permission for road inspection at Aram Nagar. Attach a GIS map to avoid conflicts.</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Files Attached by Manager</h3>
                <div className="mt-2 border rounded-lg divide-y bg-gray-50">
                  <div className="p-3 flex items-center hover:bg-gray-100 transition rounded">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                    <span className="ml-2 text-sm text-gray-900 font-medium">Area_Map.pdf</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Additional Notes</h3>
                <p className="mt-1 text-gray-900">Please ensure all safety protocols are followed during the inspection.</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">References</h3>
                <p className="mt-1 text-gray-900">Previous inspection report (2023) - Document #INS-2023-45</p>
              </div>
            </div>
          </div>

          {/* Completed Task Details */}
          <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-green-500">
            <h2 className="text-lg font-bold text-green-700 mb-4">Completed Task Details</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Description</h3>
                <p className="mt-1 text-gray-900">Permission granted, letter attached.</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Files Attached by Employee</h3>
                <div className="mt-2 border rounded-lg divide-y bg-gray-50">
                  <div className="p-3 flex items-center hover:bg-gray-100 transition rounded">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                    <span className="ml-2 text-sm text-gray-900 font-medium">Permission.pdf</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Additional Notes</h3>
                <p className="mt-1 text-gray-900">All documents are verified as per requirements.</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">References</h3>
                <p className="mt-1 text-gray-900">Previous inspection report (2023) - Document #INS-2023-45</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              Approve Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Approve;
