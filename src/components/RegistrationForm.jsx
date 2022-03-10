import React, {useState} from "react";

const RegistrationForm = () => {

    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

    return (
        <>
            <form>
                <div className="form-group m-3">
                    <label>First Name:</label>
                    <input className="m-1" type="text" onChange={ (e) => setFirstName(e.target.value)}/>
                    {
                        firstName.length == 1 ? <p>First name must be at least 2 characters.</p> : null
                    }
                </div>
                <div className="form-group mb-3">
                    <label>Last Name:</label>
                    <input className="m-1" type="text" onChange={ (e) => setLastName(e.target.value)}/>
                    {
                        lastName.length == 1 ? <p>Last name must be at least 2 characters.</p> : null
                    }
                </div>
                <div className="form-group mb-3">
                    <label>Email:</label>
                    <input className="m-1" type="email" onChange={ (e) => setEmail(e.target.value)}/>
                    {
                        email.length > 0 && email.length < 5 ? <p>Email must be at least 5 characters.</p> : null
                    }
                </div>
                <div className="form-group mb-3">
                    <label>Password:</label>
                    <input className="m-1" type="text" onChange={ (e) => setPassword(e.target.value)}/>
                    {
                        password.length > 0 && password.length < 8 ? <p>Password must be at least 8 characters.</p> : null
                    }
                </div>
                <div className="form-group mb-3">
                    <label>Comfirm Password:</label>
                    <input className="m-1" type="text" onChange={ (e) => setConfirmPassword(e.target.value)}/>
                    {
                        confirmPassword.length > 0 && confirmPassword != password ? <p>Passwords must match.</p> : null 
                    }
                </div>
            </form>
            <p>Your Form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Comfirm Password: {confirmPassword}</p>
        </>
        
    )
}

export default RegistrationForm