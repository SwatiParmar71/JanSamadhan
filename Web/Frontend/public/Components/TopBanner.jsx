import React from 'react';
import gov_logo from '../Images/gov_logo.png';
import janSamadhanLogo from '../Images/janSamadhan.png';
import { useNavigate, useLocation } from 'react-router-dom';

const TopBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    navigate('/');
  };

  return (
    <>
      <div className="top-banner flex items-center justify-between p-4 bg-white shadow-md">
        <img className="gov-logo" src={gov_logo} alt="Government Logo" width={160} />
        <div className="ban-logo" style={{ textAlign: 'center' }}>
          <img src={janSamadhanLogo} alt="Sahakar Logo" width={360} />
        </div>
        {location.pathname === '/' ? (
          <button id="empty-but" style={{ backgroundColor: 'white', width: '140px', height: '30px', border: 'none' }}></button>
        ) : (
          <button onClick={handleLogOut} id="logout-but" className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition">
            Logout
          </button>
        )}
      </div>
      <div className="notice-bar bg-black p-1 text-white font-semibold" style={{ overflow: 'hidden', whiteSpace: 'nowrap', height: '50px', display: 'flex', alignItems: 'center' }}>
        <div
          className="moving-text"
          style={{
            display: 'inline-block',
            animation: 'move-horizontally 50s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >Update: Citizens can now report civic issues like potholes, broken streetlights, and garbage collection delays directly through the portal.
          &nbsp;&nbsp;|&nbsp;&nbsp; Public Works Department: Road repair work scheduled based on citizen reports.
          &nbsp;&nbsp;|&nbsp;&nbsp; Electricity Department: Streetlight repair requests from Ranchi under processing.
          &nbsp;&nbsp;|&nbsp;&nbsp; Water Supply Department: Pipeline leakage in Dhanbad reported and assigned for action.
          &nbsp;&nbsp;|&nbsp;&nbsp; Sanitation Department: Overflowing garbage bins in Jamshedpur cleared after community report.

        </div>
      </div>
      <style jsx="true">{`
        @keyframes move-horizontally {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default TopBanner;
