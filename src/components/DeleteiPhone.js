import React, { useState } from 'react';
import './DeleteiPhone.css';
import './UIComponents.css';
import axios from "axios";

const DeleteiPhone = ({iphones}) => {

    const [deletediphone, setDeletedIPhone] = useState();

    const handleDelete  = async (e) => {
        await axios.delete(`http://localhost:8080/api/deleteIPhone?id=${deletediphone}`)
        .then((response) => {
            console.log(response.status, response.data);
        })
        .catch((error) => {
            console.error('Error: ', error.response?.status, error.response?.data);
        })
    };

    const deleteOnChange = (e) => {
        setDeletedIPhone(e.target.value);
    }

    return (
        <div className='delete-iphone-container'>
            <form onSubmit={(e) => handleDelete(e)} className='delete-form'>
                <select className='id-dropdown' onChange={deleteOnChange}>
                    {iphones?.map((iphone) =>
                        <option className='dropdown-block' value={iphone.id}>{iphone.id}</option>
                    )}
                </select>
                <button  type="submit" className='ipr-button'>Delete</button>
            </form>
        </div>
      )
}

export default DeleteiPhone