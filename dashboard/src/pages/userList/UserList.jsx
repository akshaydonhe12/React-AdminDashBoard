import React from 'react';
import './userList.css';
import { DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {userRows} from '../../duumyData';
import { Link } from 'react-router-dom'
import { useState } from 'react';



export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete =(id) =>{
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'id', headerName: 'SR', width: 200 },

        { field: 'username', headerName: 'user', width: 200,
            renderCell:(params) =>{
                return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt=" " />
                    {params.row.username}
                </div>
                )
            }
    },
        { field: 'email', headerName: 'email', width: 250 },
        {
          field: 'status',
          headerName: 'status',
          width: 300,
        },

        {
          field: 'transaction',
          headerName: 'Transactions',
          width: 160,
          
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 250,
            renderCell:(params) =>{
                return (
                    <>
                    <Link to={"/user/" + params.row.id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                     <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.row.id)}/>
                    </>
                )
            }
            
          },
      ];
      
      

  return (
    <>
    <div className="userList">
        <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

   
    </>
  )
}

