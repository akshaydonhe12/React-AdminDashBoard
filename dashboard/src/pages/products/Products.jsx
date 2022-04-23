import React from 'react';
import './products.css';
import { DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {productRows} from '../../duumyData';
import { Link } from 'react-router-dom'
import { useState} from 'react';

export default function Products() {
    const [data, setData] = useState(productRows);
    const handleDelete =(id) =>{
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'Id', width: 200 },
        { field: 'product', headerName: 'product', width: 200,
            renderCell:(params) =>{
                return (
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt=" " />
                    {params.row.name}
                </div>
                )
            }
    },
        { field: 'stock', headerName: 'Stock', width: 250 },
        {
          field: 'status',
          headerName: 'status',
          width: 300,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
          
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 250,
            renderCell:(params) =>{
                return (
                    <>
                    <Link to={"/product/" + params.row.id}>
                    <button className="productListEdit">Edit</button>
                    </Link>
                     <DeleteOutline className="productListDelete" onClick={()=> handleDelete(params.row.id)}/>
                    </>
                )
            }
            
          },
      ];
    
  return (
    <div className="products">     
        <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

    </div>
  )
}
