import React from 'react'

const Helment = (props) => {
  document.title = `Rent Car Service | Book Your Ride - Easy & Fast 🚘`;

  return <div className='w-100'>{props.children}</div>
}

export default Helment