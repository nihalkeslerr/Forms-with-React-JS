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
  //console.log("filtered: ",filtered);

  return (

    <div>
      <p>*Person Who You Want to Filter*</p>
      <input className='filter' value={FilterText} placeholder='Filter' onChange={(e)=>{setFilterText(e.target.value)}}/>
      <br/>
      <div className='infohead'>Information: </div>
      <br/>
        <ul className='list'>
          {
            
            filtered.map((contact,i)=>(
              <div key={i}>

              <li key={i}>
              <span>{contact.fullname}</span> 
              <span>{contact.Phone_Number} </span>  </li>
              </div>
            ))
          }
        </ul>
        <div>Total Contacts: ({filtered.length})</div>

    </div>
  )
}

export default List