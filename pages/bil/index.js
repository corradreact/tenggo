import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Crud = ({data}) => {

    const router                    = useRouter()
    const [listbank, set_listbank]  = useState(data.data.data)

    useEffect(() => {
        console.log("DATA FROM getServerSideProps", data)
    }, [])

    return (
        <div className="grid crud-demo">

            <div className="col-12 bg-secondary">
                <div className="card bg-white w-full">
                   
                   <div>
                        {/* <h4>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h4> */}
                        <h5>Result Usestate</h5>
                   </div>

                   {/* <div>
                        <p>{JSON.stringify(data)}</p>
                   </div> */}

                   <div>
                        {
                            listbank.length > 0 && listbank.map((item, index) => 
                                <div key={index}>
                                    <p>{index + 1}. Bank Name: {item.referenceTitle}</p>
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

export async function getServerSideProps() {

    let data;

    try {
        // Fetch data from your backend API
        data = await fetch('http://localhost:3000/api/bill/create');
        data = await data.json();

    } catch (error) {
        console.error('Error fetching data:', error);
        // Assign a default value or null when an error occurs
        data = null;
    }

    return {
        props: {
            data,
        },
    };
}

export default Crud;
