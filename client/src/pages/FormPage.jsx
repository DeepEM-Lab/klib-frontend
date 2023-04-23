import { Box, Button, FormControl, FormHelperText, InputLabel, Grid, MenuItem, Paper, Select, TextField, InputAdornment, Typography} from "@mui/material"
import { useEffect, useState } from "react";
import PeriodicTable from "../components/PeriodicTable/PeriodicTable"
import PageParent from "../structures/PageParent"
import useEdgeData from "../hooks/useEdgeData";

const FormPage = () => {

	let { isLoading, isError, data, error } = useEdgeData("edge_data.csv");
	if (data == undefined){
		data = [];
	}
	console.log(data[0]);

	//store form information	
	const [textInfo, setTextInfo] = useState([]);
	const addInfo = (/** @type {any} */ newInfo) => {
		setTextInfo(old => [...old, newInfo]);
	};


	const [selectedOption, setSelectedOption] = useState("");
	const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
	/**
	 * @param {{ element: string; edge: string; data: string; }} option
	 */
	function tempStr(option){
		return option.element + '-' + option.edge + '(' + option.data + ')';
	}

	const handleOptionChange = (/** @type {{ target: { value: import("react").SetStateAction<string>; }; }} */ event) => {
		setSelectedOption(event.target.value);
	};

	useEffect(() => console.log(textInfo), [textInfo]);
	
    return (
        <PageParent>
            <form
				onSubmit={(event) => {
				setTextInfo([]);
				event.preventDefault();
				const newInfo = event.target.info;
				Array.from(newInfo).map((i) => (
					console.log(i.value),
					addInfo(i.value),
					i.value = ''
				))
			}}>
			<fieldset>
			<legend>About You</legend>
			<div>
				<div>
				<TextField
					label="First Name"
					id=""
					sx={{ m: 1, width: '15vw' }}//minWidth: '30vw', maxWidth: '30vw'
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
				<TextField
					label="Last Name"
					id=""
					sx={{ m: 1, width: '15vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
				</div>
			</div>
			<div>
				<div>
				<TextField
					label="Email Address"
					id=""
					sx={{ m: 1, width:'30vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>					
				</div>
			</div>
			</fieldset>
			

		<fieldset>
			<legend>Spectrum Description</legend>
			<div>
				<TextField
					label="Specimen Name"
					id=""
					sx={{ m: 1, width:'30vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>		
			</div>
			<div>
				<FormControl sx={{ m: 1, width: '30vw' }}>
					<InputLabel shrink id="demo-simple-select-label">
						Spectrum Type
					</InputLabel>
					<Select
						notched
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={age}
						label="Acquisition Mode"
						// onChange={handleChange}
						name='info'
					>
						<MenuItem value="coreloss">Core-loss</MenuItem>
						<MenuItem value="lowloss">lowloss</MenuItem>
						<MenuItem value="zeroloss">zeroloss</MenuItem>
						<MenuItem value="xrayabs">xrayabs</MenuItem>
						<MenuItem value="xas transmission">XAS Transmission</MenuItem>
						
					</Select>
				</FormControl>
			</div>
			<div>
				<FormControl 
					sx={{m:1}}
				>
					<label>Data Upload</label>
					<div>
						<Button
							variant="contained"
							component="label"
						>
							Choose File
							<input
								type="file"
								accept=".msa,.dm3,.csv,.txt"
								hidden
							/>
						</Button>
						<FormHelperText>
						Files can be in <code>.msa</code>, <code>.csv</code> or <code>.txt</code> format. Files must contain two columns of numbers separated by whitespace or a comma. Lines starting with a <code>#</code> will be ignored.
						</FormHelperText>
					</div>
				</FormControl>
			</div>
			<div>
				<TextField
					label="Specimen Formula"
					id=""
					sx={{ m: 1, width: '30vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>			
			</div>
			<div>
				<TextField
					label="Source and Purity"
					id=""
					sx={{ m: 1, width: '30vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>						
			</div>
			<div>
				<TextField
					label="Associated Keywords"
					id=""
					sx={{ m: 1, width: '30vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>		
			</div>
			<div>
				<TextField
					label="Author Comments"
					id=""
					sx={{ m: 1, width: '30vw' }}
					multiline
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>					
			</div>
		</fieldset>

		<fieldset>
		<Box>Add Spectra Edge: </Box> 
		<Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			name='info'
			value={selectedOption}
			onChange={handleOptionChange}
		>
			{data.map((option) => (
				
				<MenuItem key={tempStr(option)} value={tempStr(option)}>
					{tempStr(option)}
				</MenuItem>
			))}
			
		</Select>
		</fieldset>

		<fieldset>
			<legend>Microscope Acquisition Details</legend>
			<div>
				<TextField
					label="Microscope Name/Model"
					id=""
					sx={{ m: 1, width: '30vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
			</div>
			<div>
				<TextField
					label="Gun Type"
					id=""
					sx={{ m: 1, width: '30vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
			</div>
			<div>				
				<TextField
					label="Incident Beam Energy"
					id="outlined-start-adornment"
					sx={{ m: 1, width: '30vw' }}
					InputProps=
					{{
						endAdornment: <InputAdornment position="end">kg</InputAdornment>,
					}}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
				
			</div>
			<div>
				<TextField
					label="Resolution"
					id="outlined-start-adornment"
					sx={{ m: 1, width: '30vw' }}
					InputProps=
					{{
						endAdornment: <InputAdornment position="end">eV</InputAdornment>,
					}}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
			</div>
			<div>
				<FormControl sx={{ m: 1, width: '30vw' }}>
					<InputLabel shrink id="demo-simple-select-label">
						Monochromated
					</InputLabel>
					<Select
						notched
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={age}
						label="Monochromated"
						// onChange={handleChange}
						name='info'
					>
						<MenuItem value={0}>False</MenuItem>
						<MenuItem value={1}>True</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div>
				<FormControl sx={{ m: 1, width: '30vw' }}>
					<InputLabel shrink id="demo-simple-select-label">
						Acquisition Mode
					</InputLabel>
					<Select
						notched
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={age}
						label="Acquisition Mode"
						// onChange={handleChange}
						name='info'
					>
						{/* <MenuItem value="none">None</MenuItem> */}
						<MenuItem value="imagine">Imaging</MenuItem>
						<MenuItem value="diffraction">Diffraction</MenuItem>
						<MenuItem value="stem">STEM</MenuItem>
						<MenuItem value="xas electron yield">XAS Electron Yield</MenuItem>
						<MenuItem value="xas transmission">XAS Transmission</MenuItem>
						<MenuItem value="fluorescence">Fluorescence</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div>
				<TextField
					label="Convergence Semi-angle"
					id="convergence-semi-angle"
					sx={{ m: 1, width: '30vw' }}
					InputProps=
					{{
						endAdornment: <InputAdornment position="end">mrad</InputAdornment>,
					}}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
			</div>
			<div>
				<TextField
					label="Collection Semi-angle"
					id="collection-semi-angle"
					sx={{ m: 1, width: '30vw' }}
					InputProps=
					{{
						endAdornment: <InputAdornment position="end">mrad</InputAdornment>,
					}}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
			</div>
			<div>
				<TextField
					label="Probe Size"
					id="probe-size"
					sx={{ m: 1, width: '30vw' }}
					InputProps=
					{{
						endAdornment: <InputAdornment position="end">nm²</InputAdornment>,
					}}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
			</div>
			<div>
				<TextField
					label="Beam Current"
					id=""
					sx={{ m: 1, width: '30vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
			</div>
			<div>
				<TextField
					label="Integration Time"
					id="integration-time"
					sx={{ m: 1, width: '30vw' }}
					InputProps=
					{{
						endAdornment: <InputAdornment position="end">secs</InputAdornment>,
					}}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
			</div>
			<div>
				<TextField
					label="Number of Readouts"
					id=""
					sx={{ m: 1, width: '30vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
			</div>
			<div>
				<TextField
					label="Detector"
					id=""
					sx={{ m: 1, width: '30vw' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
			</div>
		</fieldset>
		<Button type="submit" variant="contained">Submit</Button>
		<div>{textInfo}</div>
	</form>
    </PageParent>

	
    )

}

export default FormPage
