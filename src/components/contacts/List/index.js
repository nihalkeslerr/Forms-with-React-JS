import React from 'react'
import { useState } from 'react'

function List({contact}) {

  const [FilterText, setFilterText]= useState('');

  const filtered = contact.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key]
      .toString()
      .toLowerCase()
      .includes(FilterText.toLocaleLowerCase())
    )

  })
  console.log("filtered: ",filtered);

  return (

    <div>
      <input value={FilterText} placeholder='Filter' onChange={(e)=>{setFilterText(e.target.value)}}/>

        <ul>
          {
            filtered.map((contact,i)=>(
              <div>
              <li key={i}>*Fullname: {contact.fullname}  *Phone Number: {contact.Phone_Number}</li>
              </div>
            ))
          }
        </ul>

    </div>
  )
}

export default List