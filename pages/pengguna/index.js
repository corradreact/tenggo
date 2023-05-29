//import { useRouter } from 'next/router';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Skeleton } from 'primereact/skeleton';
import React, { useEffect, useState } from 'react'

function Index() {

    const [list, set_list]          = useState([]);
    const [loading, set_loading]    = useState(true)

    const router = useRouter()

    useEffect(() => {
        _fetchListFromAPI()
    }, [])

    const _fetchListFromAPI = async () => 
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

        await fetch("http://localhost:3000/api/teng", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result)
            set_list(result.data)
            set_loading(false)
        })
        .catch(error => {
            console.log('error', error)
            set_loading(false)
        });
    }

    return (
        <div className='card'>

            <div className='flex-row mb-5'>
                <h5>Senarai Pengguna</h5>
                <Button 
                    label='Tambah' 
                    icon="" 
                    onClick={() => router.push("/pengguna/tambah")} >    
                </Button>
            </div>

            {/* <div>
                <span>{JSON.stringify(list)}</span>
            </div> */}
            {
                loading ?
                <div className="">
                    <div className="border-round border-1 surface-border p-4">
                        <div className="flex mb-3">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div>
                                <Skeleton width="10rem" className="mb-2"></Skeleton>
                                <Skeleton width="5rem" className="mb-2"></Skeleton>
                                <Skeleton height=".5rem"></Skeleton>
                            </div>
                        </div>
                        <Skeleton width="100%" height="150px"></Skeleton>
                        <div className="flex justify-content-between mt-3">
                            <Skeleton width="4rem" height="2rem"></Skeleton>
                            <Skeleton width="4rem" height="2rem"></Skeleton>
                        </div>
                    </div>
                </div> :
                <DataTable
                    value={list}
                    paginator
                    className="p-datatable-gridlines"
                    showGridlines
                    rows={10}
                    dataKey="id"
                    //filters={filters1}
                    filterDisplay="menu"
                    //loading={loading1}
                    responsiveLayout="scroll"
                    emptyMessage="No customers found."
                    //header={header1}
                >
                    <Column field="username" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                    <Column field='userfullname' header="userfullname" filterField="country.name" style={{ minWidth: '12rem' }} filter filterPlaceholder="Search by country" />
                    <Column field="useremail" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} filter />
                    <Column field="userphone" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} filter  />
                    <Column field="userstatus" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} filter />
                </DataTable>
            }
        </div>
    )
}

export default Index