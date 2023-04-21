import { Box, Button, FormControl, InputLabel, Grid, MenuItem, Paper, Select, TextField, InputAdornment, Typography} from "@mui/material"
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
                    <label htmlFor="eelsdb_spectra_author_firstname">Your Name</label>
                    <div>
                        <input type="text" name="info" placeholder="First name"/> &nbsp;
                        <input type="text" name="info" placeholder="Last name"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="eelsdb_spectra_author_email">Email address</label>
                    <div>
                        <input type="email" name="info" placeholder="Your e-mail address"/>
                        <span><strong>Note:</strong> An account will be created for you if you're not already registered.</span>
                    </div>
                </div>
            	</fieldset>
             

            <fieldset>
                <legend>Spectrum Description</legend>
				<div>
                    <label htmlFor="post_title">Specimen Name</label>
                    <div>
                        <input type="text" name="info" placeholder="Specimen name"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="eelsdb_spectra_spectrumType">Spectrum Type</label>
                    <div>
                        <select name="info">
                            <option value="coreloss" >Core-loss</option>
                            <option value="lowloss" >Low-loss</option>
                            <option value="zeroloss" >Zero-loss</option>
                            <option value="xrayabs" >XRay Abs</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="eelsdb_spectra_spectrumUpload">Data Upload</label>
                    <div>
                        <div>
							<span>
								<span>
									Browse&hellip; <input type="file" name="eelsdb_spectra_spectrumUpload" accept=".msa,.dm3,.csv,.txt" size="25"/>
								</span>
							</span>
							
                        </div>
                        <span>Files can be in <code>.msa</code>, <code>.csv</code> or <code>.txt</code> format. Files must contain two columns of numbers separated by whitespace or a comma. Lines starting with a <code>#</code> will be ignored.</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="eelsdb_spectra_spectrumFormula">Specimen Formula</label>
                    <div>
                        <input type="text" name="info" placeholder="Specimen Formula"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="eelsdb_spectra_source_purity">Source and Purity</label>
                    <div>
                        <input type="text" name="info" placeholder="Source and Purity"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="eelsdb_spectra_spectrumKeywords">Associated Keywords</label>
                    <div>
                        <input type="text" name="info" placeholder="Separate keywords with commas"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="eelsdb_spectra_spectrumComments">Author Comments</label>
                    <div>
                        <textarea name="info" placeholder="Author Comments"></textarea>
                    </div>
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
			{/* <input type="hidden" id="eelsdb_spectra_upload_nonce" name="eelsdb_spectra_upload_nonce" value="86deac9ca7" /><input type="hidden" name="_wp_http_referer" value="/submit-data/" />			 */}
			<div>
				<TextField
					label="Microscope Name/Model"
					id=""
					sx={{ m: 1, width: '30' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
            </div>
			<div>
				{/* <label>Gun Type</label> */}
				<TextField
					label="Gun Type"
					id=""
					sx={{ m: 1, width: '30' }}
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
					sx={{ m: 1, width: '30' }}
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
					sx={{ m: 1, width: '30' }}
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
				<FormControl sx={{ m: 1, width: '25ch' }}>
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
				<FormControl sx={{ m: 1, width: '25ch' }}>
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
						<MenuItem value="none">None</MenuItem>
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
					sx={{ m: 1, width: '30' }}
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
					sx={{ m: 1, width: '30' }}
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
					sx={{ m: 1, width: '30' }}
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
					sx={{ m: 1, width: '30' }}
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
					sx={{ m: 1, width: '30' }}
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
					sx={{ m: 1, width: '30' }}
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
					sx={{ m: 1, width: '30' }}
					InputLabelProps=
					{{
						shrink: true,
					}}
					variant="outlined"
					name='info'
				/>
            </div>
		</fieldset>
		<Button type="submit">Submit</Button>
		<div>{textInfo}</div>
	</form>
    </PageParent>

	
    )

}

export default FormPage
