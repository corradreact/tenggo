import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { color } from '../../constants';

const Crud = () => {

    const router                    = useRouter()
    const [listbank, set_listbank]  = useState([])

    useEffect(() => {
        hit_api()
    }, [])

    const hit_api = async () => 
    {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("https://toyyibpay.com/api/getBankFPX", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)

            //CONDITION IF API TOYYIBPAY OKAY
            if(result.length > 0) {
                set_listbank(result)
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className="grid crud-demo">

            {/* <div className="col-12">
                <div className="card bg-white">
                    <div className='header'>
                        <h6>Bil / Senarai bil</h6>
                    </div>
                </div>
            </div>

            <div className="col-12 bg-secondary">
                <div className="card" style={{ backgroundColor: color.primary }} onClick={() => router.push(`/`)}>
                    <div className='header'>
                        <h5 className='text-white text-bold'>Cukai Taksiran </h5>
                        <span className='text-sm text-white'>Senarai bil cukai taksiran</span>
                    </div>
                </div>
            </div> */}

            <div className="col-12 bg-secondary">
                <div className="card bg-white w-full">
                   
                   <div>
                        {/* <h4>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h4> */}
                        <h5>Result Usestate</h5>
                   </div>

                   <div>
                        {
                            listbank.length > 0 && listbank.map((item, index) => 
                                <div key={index}>
                                    <p>{index + 1}. Bank Name: {item.NAME}</p>
                                </div>
                            )
                        }
                   </div>
                   {/* <iframe src="https://mymps.mps.gov.my" className='w-full' style={{ height: '1'}} title="description"></iframe> */}
                </div>
            </div>

        </div>
    );
};

export default Crud;
