import React, { useState } from 'react';
import { useRef } from 'react';
import supabase from '../config/config';

const StudentForm = () => {
  let username = useRef()
  let userage = useRef()
  let userclass = useRef()
  let usergmail = useRef()

  async function handleForm(e) {
    e.preventDefault();

    let std_data = {
      name: username.current.value,
      age: userage.current.value,
      class: userclass.current.value,
      email: usergmail.current.value
    }
    console.log(std_data)

    const { error } = await supabase
      .from('student_data')
      .insert([std_data])
    if (error) {
      console.log(error)
      return
    }

    alert("student successfully registerd")
  }


  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4 flex justify-center items-center">
      <div className="form-container w-full max-w-lg p-8 rounded-3xl shadow-2xl">

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Student Registration</h2>
          <p className="text-gray-400">Enter student details to add to the system</p>
        </div>

        <form className="space-y-6" onSubmit={handleForm}>

          {/* Student Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Student Name</label>
            <input
              type="text"
              name="stdName"
              ref={username}
              placeholder="e.g. John Doe"
              className="custom-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Student Age */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
              <input
                type="number"
                ref={userage}
                placeholder="18"
                className="custom-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-500"
                required
              />
            </div>

            {/* Student Class */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Class</label>
              <input
                type="text"
                name="stdClass"
                ref={userclass}
                placeholder="Grade 10"
                className="custom-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-500"
                required
              />
            </div>
          </div>

          {/* Student Gmail */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Gmail Address</label>
            <input
              type="email"
              name="stdGmail"
              ref={usergmail}
              placeholder="student@gmail.com"
              className="custom-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/20 mt-4"
          >
            Add Student Data
          </button>

        </form>
      </div>
    </div>
  );
};

export default StudentForm