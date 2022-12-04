import React, { useEffect } from 'react'
import List from './List';
import Form from './Form';
import { useState } from 'react';

function Contacts() {
  const [contacts,setContact] = useState([{
    fullname:"Nihal",
    Phone_Number:12345
  },
  {
    fullname:"Kerem",
    Phone_Number:987
  }]);

  useEffect(()=>{
    console.log("contact: ",contacts);
  },[contacts])

  return (
    <div>
        FORM PAGE
        <List contact={contacts}/> 
        <Form addcontact={setContact} contact={contacts} />
         
    </div>
  
  )
}

export default Contacts;