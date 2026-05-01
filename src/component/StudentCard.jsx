import React from 'react';
import Popup from './Popup';


const StudentCard = (props) => {
  function showpopup(std_id) {
    localStorage.setItem("popOn", true)
    localStorage.setItem("std_id", std_id)
    window.location.reload()
  }
  return (
    <div className="student-card w-3/12 p-6 rounded-3xl text-white relative overflow-hidden">

      {/* Top Section: Avatar & Name */}
      <div className="flex flex-col items-center mb-6">
        <div className="avatar-glow rounded-full mb-4">
          <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-2xl font-bold border-2 border-[#0f172a]">
            {props.stdName.charAt(0).toUpperCase()}
          </div>
        </div>
        <h3 className="text-xl font-bold tracking-wide">{props.stdName}</h3>
        <span className="text-blue-400 text-sm font-medium uppercase tracking-widest mt-1">
          Student Profile
        </span>
      </div>

      {/* Info Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
          <span className="text-gray-400 text-sm">Age</span>
          <span className="font-semibold">{props.stdAge} Years</span>
        </div>

        <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
          <span className="text-gray-400 text-sm">Class</span>
          <span className="font-semibold">{props.stdClass}</span>
        </div>

        <div className="bg-white/5 p-3 rounded-xl border border-white/5">
          <span className="text-gray-400 text-sm block mb-1">Gmail Address</span>
          <span className="font-semibold text-blue-300 break-all">{props.stdGmail}</span>
        </div>
      </div>

      {/* Footer Action */}
      <button onClick={() => showpopup(props.stdid)} className="w-full mt-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-sm font-semibold transition-all">
        Edit
      </button>
      <button className="w-full mt-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-sm font-semibold transition-all">
        Delete
      </button>

      {/* Decorative Background Element */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600/10 rounded-full blur-3xl"></div>







    </div>
  );
};

export default StudentCard;