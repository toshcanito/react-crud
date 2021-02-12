import React, { useState, useEffect } from "react";
import ContactsForm from "./ContactForm"
import firebaseDb from "../firebase";

const Contacts = () => {
    let [contactObjects, setContactObjects] = useState({});
    let [currentID, setCurrentID] = useState('');

    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            setContactObjects({ ...snapshot.val() });
        });
    }, []);

    const deleteContact = (id) => {
        console.log("derp delete");
        if (window.confirm('Are you sure you want to delete this record?')) {
            firebaseDb.child(`contacts/${id}`).remove(
                err => {
                    if (err) {
                        console.log("Error while deleting record in database. Error description: " + err);
                    } else {
                        setCurrentID('');
                    }
                });
        }
    }

    const addOrEdit = (obj) => {
        if (!currentID) {
            firebaseDb.child('contacts').push(obj,
                err => {
                    if (err) {
                        console.log("Error while saving in database. Error description: " + err);
                    }
                });
        } else {
            firebaseDb.child(`contacts/${currentID}`).set(obj,
                err => {
                    if (err) {
                        console.log("Error while saving in database. Error description: " + err);
                    } else {
                        setCurrentID('');
                    }
                });
        }
    }
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4 text-center">Contact Register</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ContactsForm {...({ addOrEdit, currentID, contactObjects })} />
                        </div>
                        <div className="col-md-8">
                            <table className="table table-borderless table-stripped">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Full Name</th>
                                        <th>Mobile Number</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.keys(contactObjects).map(id => {
                                            return <tr key={id}>
                                                <td>{contactObjects[id].fullName}</td>
                                                <td>{contactObjects[id].mobileNumber}</td>
                                                <td>{contactObjects[id].email}</td>
                                                <td>
                                                    <a className="btn text-primary" onClick={() => { setCurrentID(id); }}>
                                                        <i className="fas fa-pencil-alt"></i>
                                                    </a>
                                                    <a className="btn text-danger" onClick={() => { deleteContact(id); }}>
                                                        <i className="fas fa-trash-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contacts;