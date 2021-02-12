import React, { useState, useEffect } from "react";

const ContactsForm = (props) => {
    const initialiFieldValues = {
        fullName: '',
        mobileNumber: '',
        email: '',
        address: ''
    };

    const handleInputChange = (e) => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.addOrEdit(values);
    };
    useEffect(() => {
        if (!props.currentID) {
            setValues({ ...initialiFieldValues })
        } else {
            setValues({ ...props.contactObjects[props.currentID] });
        }
    }, [props.currentID, props.contactObjects]);

    let [values, setValues] = useState(initialiFieldValues);
    return (
        <React.Fragment>
            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="form-row">
                    <div className="form-group input-group col-md-12">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Full name" name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-phone"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Mobile phone number" name="mobileNumber"
                            value={values.mobileNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Email address" name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <textarea className="form-control" placeholder="Address" name="address"
                            value={values.address}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <input type="submit" value={!props.currentID ? "Save" : "Update"} className="btn btn-primary btn-block"></input>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}

export default ContactsForm;