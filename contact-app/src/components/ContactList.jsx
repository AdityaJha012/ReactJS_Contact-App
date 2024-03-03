import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
    const searchInput = useRef("");

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler={ deleteContactHandler }/>
        );
    });

    const getSearchTerm = () => {
        props.searchKeyword(searchInput.current.value);
    };

    return(
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold underline mb-4">Contact List
                <Link to="/add">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg float-right text-lg">Add Contact</button>
                </Link>
            </h2>
            <br />
            <input ref={ searchInput }
                type="text"
                placeholder="Search contacts..."
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 mb-4" value={ props.term } onChange={ getSearchTerm }
            />

            <div className="grid grid-cols-1 gap-4">
                {renderContactList.length > 0 ? renderContactList : "No Contacts Available!"}
            </div>
        </div>
    );
}

export default ContactList;