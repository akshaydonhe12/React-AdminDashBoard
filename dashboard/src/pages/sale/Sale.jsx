import React from 'react';
import './sale.css';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';


export default function Sale() {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 12,
      });
    
  return (
      <>
    <div className="sale">
        <h3 className="saleTitle">Sale</h3>
    </div>
    <div style={{ height: 800, width: '100%', marginTop: '50px'}}>
      <DataGrid
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
    </>
  )
}
