import React from 'react'
import { useState } from 'react'

const CreateCustomer = () => {

    const [customer, setCustomer] = useState({
        name: "",
        last_name: ""
    });

  return (
    <>
    <h3>Create customer</h3>
    <form action="">
        <input type="text" placeholder='Name'/>&nbsp;
        <input type="text" placeholder='Last name'/> &nbsp;
        <button>Save</button>
    </form>
    </>
  )
}

export default CreateCustomer
