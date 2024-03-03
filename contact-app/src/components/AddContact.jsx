import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
    state = {
        userName: "",
        email: ""
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.userName === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }

        this.props.addContactHandler(this.state);
        this.setState({ userName: "", email: "" });
    }

    render() {
        return (
            <div className="container mx-auto p-4">
                <h2 className="text-3xl font-bold underline mb-4">Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input type="text" name="userName" id="userName" placeholder="Enter Username..." value={this.state.userName} onChange={(e) => this.setState({ userName: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Email..." value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Save Contact</button>
                        <div className="mx-4"></div>
                        <Link to="/">
                            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Back to List</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }   
}

export default AddContact;