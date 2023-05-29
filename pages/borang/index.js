import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'

export default function index() {

    const [username, set_username]  = useState("")
    const [email, set_email]        = useState("")
    const [phone, set_phone]        = useState("")

    const _submitForm = async () => {

        if(!username) 
        {
            alert("Username is not defined. Please check your form.")
        } 
        else if(!email) 
        {
            alert("Email is not defined. Please check your form.")
        } 
        else if(!phone) 
        {
            alert("Phone is not defined. Please check your form.")
        } 
        else {
            //alert("mantap...")
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "username": username,
                "email": email,
                "phone": phone
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            await fetch("http://localhost:3000/api/user/create", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)

                if(result.status_code === 200) {
                    alert("Register Successful!")
                    set_username("")
                    set_email("")
                    set_phone("")
                } else {
                    alert("Failed to register new user.")
                }
            })
            .catch(error => console.log('error', error));
        } 
    }

    return (
        <div className='card'> 

            <div>
                <h3>Borang Pendaftaran Pengguna</h3>
            </div>

            <div className="grid">

                <div className="col-12 md:col-6">
                    <div className="card p-fluid">
                        
                    <h5>Vertical</h5>
                    <div className="field">
                        <label htmlFor="name1">Username</label>
                        <InputText id="name1" type="text" onChange={(text) => set_username(text.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="email1">Email</label>
                        <InputText id="email1" type="email" onChange={(text) => set_email(text.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="age1">Phone</label>
                        <InputText id="age1" type="number" onChange={(text) => set_phone(text.target.value)} />
                    </div>
                    </div>
                    <div className="">
                        <Button onClick={_submitForm} label="Teruskan Pendaftaran"></Button>
                    </div>
                </div>

                <div className="col-12 md:col-6">
                    <div className="card p-fluid">
                        <span>card sebelah kanan</span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
