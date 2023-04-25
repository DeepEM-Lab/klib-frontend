
import { DataGrid } from "@mui/x-data-grid"
import PageParent from "../structures/PageParent"

const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    // { field: 'firstName', headerName: 'First name', width: 130 },
    // { field: 'lastName', headerName: 'Last name', width: 130 },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
    // ******************************
    {
        field: 'spectrumTitle', 
        headerName: 'Spectrum Title', 
        width: 'auto'
    },
    {
        field: 'formula', 
        headerName: 'Formula', 
        width: 'auto'
    },
    {
        field: 'edge', 
        headerName: 'Edge', 
        width: 'auto'
    },
    {
        field: 'minEnergy', 
        headerName: 'Min Energy', 
        width: 'auto'
    },
    // {
    //     field: 'maxEnergy', 
    //     headerName: 'Max Energy', 
    //     width: 'auto'
    // },
    // {
    //     field: 'resolution', 
    //     headerName: 'Resolution', 
    //     width: 'auto'
    // },
    // {
    //     field: 'source&purity', 
    //     headerName: 'Source & Purity', 
    //     width: 'auto'
    // },
    // {
    //     field: 'spectrumTitle', 
    //     headerName: 'Spectrum Title', 
    //     width: 'auto'
    // },

  ];
  
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const BrowsePage = () => {
    return (
        <PageParent>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    paginationModel={{ page: 0, pageSize: 5 }}
                    // checkboxSelection
                />
            </div>
        </PageParent>
    )
}

export default BrowsePage