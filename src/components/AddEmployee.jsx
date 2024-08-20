import React, { useState } from 'react'

const AddEmployee = () => {

    const [employee,setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        email:""
    })

    const handleChange = (e)=>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name] : value})
    }

    return (
        <div className='flex max-w-2xl mx-auto shadow border-b'>
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Add New Employee</h1>
                </div>

                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                    <input type="text" name="firstName"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={employee.firstName}
                        onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                    <input type="text" name="lastName"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={employee.lastName}
                        onChange={(e) => handleChange(e)} />
                </div>

                <div>
                    <label className='block text-gray-600 text-sm font-normal'>Email</label>
                    <input type="email" name="email"
                        className='h-10 w-96 border mt-2 px-2 py-2'
                        value={employee.email}
                        onChange={(e) => handleChange(e)} />
                </div>
            </div>

        </div>
    )
}

export default AddEmployee
