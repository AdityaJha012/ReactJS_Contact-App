import React from "react";
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactCard = (props) => {
    const { id, userName, email } = props.contact;
    return (
        <div className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-md">
            <img src={user} alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-grow">
                <Link to={{pathname: `/contact/${id}`}}>
                    <div className="text-lg font-semibold">{userName}</div>
                    <div className="text-gray-500">{email}</div>
                </Link>
            </div>
            <Link to={{pathname: `/update/${id}`}}>
                <button 
                    className="text-white text-xl cursor-pointer bg-green-500 border border-green-500 px-4 py-2 rounded-lg">
                    Update
                </button>
            </Link>
            <div className="mx-2"></div>
            <button 
                className="text-white text-xl cursor-pointer bg-red-500 border border-red-500 px-4 py-2 rounded-lg"
                onClick={() => props.clickHandler(id)}>
                Delete
            </button>
        </div>
    );
};

export default ContactCard;