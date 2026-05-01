import React from 'react'

const Popup = () => {


    return (
        <div className="popup-wrapper hidden">
            <div className="card-poup">
                <button className='text-white bg-red-900 w-full py-5 cursor-pointer'>X</button>
                <UpdateForm />
            </div>
        </div>
    )
}

export default Popup