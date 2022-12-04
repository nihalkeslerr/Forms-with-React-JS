
import { useState, useEffect } from 'react';

const initialformvalues={fullname:"", Phone_Number:""}

function Form({addcontact,contact}) {

  const [form,setForm]= useState(initialformvalues);

  const onChangeInput =(e)=>{
    setForm({...form , [e.target.name]: e.target.value });
  };
  
  useEffect(()=>{
    setForm(initialformvalues);
  },[contact]);


  const OnSubmit =(e)=>{

    e.preventDefault();

    if(form.fullname==="" || form.Phone_Number===""){
      console.log("name or phone number is empty")
      return false;
    }
    
    addcontact([...contact, form])
    
    //console.log("FOrm: ",form);
    //setForm(initialformvalues);


  }

  return (
    <form onSubmit={OnSubmit}>
    <div>

      <div>
        <input value={form.fullname} onChange={onChangeInput} name='fullname' placeholder='FullName'/>
      </div>

      <div>
        <input value={form.Phone_Number} onChange={onChangeInput} name='Phone_Number' placeholder='Phone Number' />
      </div>

      <div>
        <button>ADD</button>
      </div>

    </div>
    </form>
  );
}

export default Form;