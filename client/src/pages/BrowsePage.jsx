
import { DataGrid } from "@mui/x-data-grid"
import PageParent from "../structures/PageParent"

// import data from "/fake_files/"

// var fs = require('fs');
// var files = fs.readdirSync('/../../public/fake_files/');
function importAll(r) {
    return r.keys().map(r);
}
//, false, /\.(txt)$/
const fileNames = importAll(require.context('../../public/data/'));

function getRows(f, r){
    for (let i = 0; i < f.length; i++) {
        var temp = f[i].split('/')[3].split('.')[0];
        // console.log(temp)
        r.push({ id: temp, spectrumTitle: temp});//field: fileNames[i].default.name, headerName: fileNames[})
    }
}


const columns = [
    // { field: 'temp', headerName: 'TEMP', width: 70 },
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
        width: 300
    },
    {
        field: 'preview', 
        headerName: 'Preview', 
        width: 300
    },
    {
        field: 'formula', 
        headerName: 'Formula', 
        width: 150
    },
    {
        field: 'edge', 
        headerName: 'Edge', 
        width: 100
    },
    {
        field: 'minEnergy', 
        headerName: 'Min Energy', 
        width: 150
    },
    {
        field: 'maxEnergy', 
        headerName: 'Max Energy', 
        width: 150
    },
    {
        field: 'resolution', 
        headerName: 'Resolution', 
        width: 150
    },
    {
        field: 'spectrumType', 
        headerName: 'Spectrum Type', 
        width: 150
    }


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
    // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    // { id: 1, spectrumTitle: '1', formula: '1', edge: '1', minEnergy: '1', maxEnergy: '1', resolution:'1', spectrumType: '1' },
    // {spectrumTitle: '1', formula: '1', edge: '1', minEnergy: '1', maxEnergy: '1', resolution:'1', spectrumType: '1'},
    // {spectrumTitle: '1', formula: '1', edge: '1', minEnergy: '1', maxEnergy: '1', resolution:'1', spectrumType: '1'},
    // {spectrumTitle: '1', formula: '1', edge: '1', minEnergy: '1', maxEnergy: '1', resolution:'1', spectrumType: '1'},
    // {spectrumTitle: '1', formula: '1', edge: '1', minEnergy: '1', maxEnergy: '1', resolution:'1', spectrumType: '1'},
    // {spectrumTitle: '1', formula: '1', edge: '1', minEnergy: '1', maxEnergy: '1', resolution:'1', spectrumType: '1'},
    // {spectrumTitle: '1', formula: '1', edge: '1', minEnergy: '1', maxEnergy: '1', resolution:'1', spectrumType: '1'},
    // {spectrumTitle: '1', formula: '1', edge: '1', minEnergy: '1', maxEnergy: '1', resolution:'1', spectrumType: '1'},
    // {spectrumTitle: '1', formula: '1', edge: '1', minEnergy: '1', maxEnergy: '1', resolution:'1', spectrumType: '1'},
    // {spectrumTitle: '1', formula: '1', edge: '1', minEnergy: '1', maxEnergy: '1', resolution:'1', spectrumType: '1'},

];

getRows(fileNames, rows);

const BrowsePage = () => {
    return (
        <PageParent>
            {/* <div>
                {{fileNames}}
            </div> */}
            <div style={{ height: 'auto', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                          paginationModel: {
                            pageSize: 50,
                          },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                    // checkboxSelection
                />
            </div>
        </PageParent>
    )
}

export default BrowsePage