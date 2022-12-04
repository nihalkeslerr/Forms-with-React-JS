import React from 'react'

function List({contact}) {
  return (
    <div>
        <ul>
          {
            contact.map((contact,i)=>(
              <div>
              <li key={i}>FULLNAME: {contact.fullname} PHONE NUMBER{contact.Phone_Number}</li>
              </div>
            ))
          }
        </ul>

    </div>
  )
}

export default List