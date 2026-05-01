import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import StudentForm from './component/Form'
import StudentCard from './component/StudentCard'
import supabase from './config/config'
import UpdateForm from './component/Update'

const App = () => {
  const [stddata, setstddata] = useState([])

  useEffect(() => {
    async function getData() {
      let { data, error } = await supabase
        .from('student_data')
        .select('*')
      if (error) {
        console.log(error.message)
        return
      }
      setstddata(data)
    }
    getData()
  }, [])


  return (
    <div>
      <Header />
      <Hero />
      <StudentForm />
      <div className="bg-[#0f172a] flex items-center justify-center gap-5 flex-wrap">
        {stddata.map((value, index) => {
          return (<StudentCard stdid={value.id} key={value.id} stdName={value.name} stdAge={value.age} stdGmail={value.email} stdClass={value.class} />)
        })}
      </div>




      {localStorage.getItem("popOn") == 'true' ?
        <div className="popup-wrapper" id='popup'>
          <div className="card-poup">
            <button onClick={() => {
              localStorage.setItem("popOn", false)
              window.location.reload()
            }} className='text-white bg-red-900 w-full py-5 cursor-pointer'>X</button>
            <UpdateForm />
          </div>
        </div>
        : <span></span>
      }
    </div>
  )
}

export default App