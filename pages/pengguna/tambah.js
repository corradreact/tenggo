import { useRouter } from 'next/router'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import React, { useState } from 'react'

function Tambah() {

    const router                    = useRouter()
    const [loading, set_loading]    = useState(false);

    const [username, set_username]  = useState("")
    const [fullname, set_fullname]  = useState("")
    const [password, set_password]  = useState("")
    const [email, set_email]        = useState("")
    const [phone, set_phone]        = useState("")

    const _submitForm = async () => {

        set_loading(true)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            username: username,
            userpassword: password,
            userfullname: fullname,
            useremail: email,
            userphone: phone
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://localhost:3000/api/teng/create", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.status_code === 200) {
                router.push("/pengguna")
                set_loading(false)
            } else {
                alert("Gagal mendaftar pengguna baru.")
                set_loading(false)
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
    <div className='card'>
        <div className=''>
            <h5>Borang Tambah Pengguna</h5>
        </div>

        <div>
        <div className="">
            <div className="p-fluid formgrid grid">
                <div className="field col-12 md:col-6">
                    <label htmlFor="firstname2">Nama Pengguna</label>
                    <InputText id="firstname2" type="text" onChange={text => set_username(text.target.value)} />
                </div>
                <div className="field col-12 md:col-6">
                    <label htmlFor="lastname2">Nama Penuh</label>
                    <InputText id="lastname2" type="text" onChange={text => set_fullname(text.target.value)}/>
                </div>
                <div className="field col-12">
                    <label htmlFor="address">Kata Laluan</label>
                    <InputText id="address" type="password" rows="4" onChange={text => set_password(text.target.value)} />
                </div>
                <div className="field col-12 md:col-6">
                    <label htmlFor="city">E-mel</label>
                    <InputText id="city" type="text" onChange={text => set_email(text.target.value)} />
                </div>
                <div className="field col-12 md:col-6">
                    <label htmlFor="zip">No. Telefon</label>
                    <InputText id="zip" type="text" onChange={text => set_phone(text.target.value)} />
                </div>
                <div className="field" style={{ alignItems: 'flex-end', justifyContent: 'right' }}>
                    <Button onClick={_submitForm} label='Daftar Pengguna' style={{ alignSelf: 'flex-end' }} />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Tambah