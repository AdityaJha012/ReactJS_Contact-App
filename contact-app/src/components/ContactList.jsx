import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

class ContactList extends React.Component {
    render(){
        const deleteContactHandler = (id) => {
            this.props.getContactId(id);
        }
        const renderContactList = this.props.contacts.map((contact) => {
            return(
                <ContactCard contact={contact} clickHandler={ deleteContactHandler }/>
            );
        });
        return(
            <div className="container mx-auto p-4">
                <h2 className="text-3xl font-bold underline mb-4">Contact List</h2>
                <div className="grid grid-cols-1 gap-4">
                    {renderContactList}
                </div>

                <div className="flex justify-center">
                    <Link to="/add">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg float-right text-lg">Add Contact</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ContactList;