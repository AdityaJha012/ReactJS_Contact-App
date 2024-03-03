import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const UpdateContact = (props) => {
    const { id } = useParams();
    const contact = props.contacts.filter(obj => obj.id === id);
    const updateContactHandler = props.updateContactHandler;

    // Initialize state for userName and email
    const [userName, setUserName] = useState(contact[0] ? contact[0].userName : "");
    const [email, setEmail] = useState(contact[0] ? contact[0].email : "");
    
    const navigate = useNavigate();

    // Function to handle form submission
    const update = (e) => {
        e.preventDefault();
        if (userName === "" || email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        
        // Call the updateContactHandler function passed from props
        updateContactHandler({ id, userName, email });

         // Clear input fields after submission
        setUserName("");
        setEmail("");

        navigate("/");
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold underline mb-4">Update Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="mb-4">
                    <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input 
                        type="text" 
                        name="userName" 
                        id="userName" 
                        placeholder="Enter Username..." 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" 
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter Email..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" 
                    />
                </div>
                <div className="flex justify-center">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Update Contact</button>
                    <div className="mx-4"></div>
                    <Link to="/">
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Back to List</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default UpdateContact;