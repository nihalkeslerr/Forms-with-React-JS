import React, { useEffect } from 'react'
import List from './List';
import Form from './Form';
import { useState } from 'react';

function Contacts() {
  const [contacts,setContact] = useState([]);

  useEffect(()=>{
    console.log("contact: ",contacts);
  },[contacts])

  return (
    <div>
        Contact Sayfası
        <List/> 
        <Form addcontact={setContact} contact={contacts} />
         
    </div>
  
  )
}

export default Contacts;