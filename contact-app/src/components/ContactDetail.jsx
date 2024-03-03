import React from 'react';
import user from '../images/userNew.jpg';
import { Link, useParams } from 'react-router-dom';

const ContactDetail = (props) => {
    const { id } = useParams();
    const contact = props.contacts.filter(obj => obj.id === id);
    const { userName, email } = contact[0];
    return (
        <div className="container mx-auto p-4">
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={user} alt="User" className="w-full h-96 object-cover" />
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">{ userName }</h2>
                    <p className="text-gray-600">{ email }</p>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <Link to="/">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Back to List</button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetail;