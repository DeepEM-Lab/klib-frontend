import { Box, Button, Grid, MenuItem, Paper, Select, Typography} from "@mui/material"
import { useEffect, useState } from "react";
import PeriodicTable from "../components/PeriodicTable/PeriodicTable"
import PageParent from "../structures/PageParent"
import Papa from 'papaparse';

//notes: can only submit info in "About You" and "Spectrum Description" fieldset
const FormPage = () => {

    // const [isOpen, setIsOpen] = useState(false);
	// const [elementList, setElement] = useState([]);

	// TODO: fix typing
	// @ts-ignore
	// const onClick = (name) => {
	// 	// setElement([...name, name]);
	// 	// @ts-ignore
	// 	setElement(old => [...old, name])
	// 	// console.log(elementList);
	// };

	// useEffect(() => console.log(elementList), [elementList]);
	// const [csvData, setCsvData] = useState([]);

	// useEffect(() => {
	//   const fetchData = async () => {
	// 	const response = await fetch('/edge_data.csv');
	// 	if (response.body){
	// 		const reader = response.body.getReader();
	// 		const result = await reader.read();
	// 		const decoder = new TextDecoder('utf-8');
	// 		const csv = decoder.decode(result.value);
	// 		Papa.parse(csv, {
	// 		header: true,
	// 		complete: function (results) {
	// 			setCsvData(results.data);
	// 		},
	// 		});
	// 	}
		
		
	//   };
  
	//   fetchData();
	// }, []);

	// console.log(csvData);


	//store form information	
	const [textInfo, setTextInfo] = useState([]);
	const addInfo = (newInfo) => {
		setTextInfo(old => [...old, newInfo]);
	};


	const [selectedOption, setSelectedOption] = useState("");
	const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	useEffect(() => console.log(textInfo), [textInfo]);
	
	// const buttonNames = ["K",  "Ca",  "Sc",  
	// "Ti",  "V",  "Cr",  "Mn",  "Fe",  "Co",  "Ni",  "Cu",  "Zn",  "Ga",  "Ge",  "As",  
	// "Se",  "Br",  "Kr"];

	// const buttonNames1 = ["Rb",  "Sr",  "Y",  "Zr",  "Nb",  "Mo",  "Tc",  "Ru",  "Rh",  
	// "Pd",  "Ag",  "Cd",  "In",  "Sn",  "Sb",  "Te",  "I",  "Xe"];

	// const buttonNames2 = ["Cs",  "Ba",  "La",  
	// "Hf",  "Ta",  "W",  "Re",  "Os",  "Ir",  "Pt",  "Au",  "Hg",  "Tl",  
	// "Pb",  "Bi",  "Po",  "At",  "Rn"];

	// const buttonNames3 = ["Fr",  "Ra",  "Ac",  "Rf",  "Db",  
	// "Sg",  "Bh",  "Hs",  "Mt",  "Ds",  "Rg",  "Cn",  "Nh",  "Fl",  "Mc",  "Lv",  "Ts",  "Og"];

	// const buttonNames4 = ["La",  "Ce",  "Pr",  "Nd",  "Pm",  "Sm",  "Eu",  "Gd",  "Tb",  "Dy",  "Ho",  "Er",  "Tm",  "Yb",  "Lu"];

	// const buttonNames5 = ["Ac",  "Th",  "Pa",  "U",  "Np",  "Pu",  "Am",  "Cm",  "Bk",  "Cf",  "Es",  "Fm",  "Md",  "No",  "Lr"];
	
    // function handleToggle() {
    //     setIsOpen(!isOpen);
    // }
    return (
        <PageParent>
            <form
				onSubmit={(event) => {
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
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={selectedOption}
				onChange={handleOptionChange}
			>
				{options.map((option) => (
					<MenuItem key={option} value={option}>
					{option}
					</MenuItem>
				))}
			</Select>
			</fieldset>
            {/* <fieldset className="hide-zero">
                <legend>Feature Identification</legend>
                    {isOpen && <div id="eelsdb_edges_added_edges">
                    <p>Click name to delete edge..</p>
                                </div>}
                <div style={{ clear: 'both' }}></div>
                {isOpen && <div id="edge_selection">
        <div id="periodic_table_div">
            <p>Select an element..</p>
			
            <table id="periodic_table">
                <tbody>
                    <tr>
                        <td className="col1"><Button title="Hydrogen">H</Button></td>
                        <td colSpan= {16} className="empty"></td>
                        <td className="col3"><Button title="Helium">He</Button ></td>
                    </tr>
                    <tr>
                        <td className="col1"><Button title="Lithium">Li</Button></td>
                        <td className="col1"><Button title="Beryllium">Be</Button></td>
                        <td colSpan={10} className="empty"></td>
                        <td className="col3"><Button title="Boron">B</Button></td>
                        <td className="col3"><Button title="Carbon">C</Button></td>
                        <td className="col3"><Button title="Nitrogen">N</Button></td>
                        <td className="col3"><Button title="Oxygen">O</Button></td>
                        <td className="col3"><Button title="Fluorine">F</Button></td>
                        <td className="col3"><Button title="Neon">Ne</Button></td>
                        <td className="empty"></td>
                    </tr>
                    <tr>
                        <td className="col1"><Button title="Sodium">Na</Button></td>
                        <td className="col1"><Button title="Magnesium">Mg</Button></td>
                        <td colSpan={10} className="empty"></td>
                        <td className="col3"><Button title="Aluminium">Al</Button></td>
                        <td className="col3"><Button title="Silicon">Si</Button></td>
                        <td className="col3"><Button title="Phosphorus">P</Button></td>
                        <td className="col3"><Button title="Sulfur">S</Button></td>
                        <td className="col3"><Button title="Chlorine">Cl</Button></td>
                        <td className="col3"><Button title="Argon">Ar</Button></td>
                        <td className="empty"></td>
                    </tr>
                
					<tr>					
						{buttonNames.map((name, index) => (
							<td>
							<Button
								key={index}
								// variant="contained"
								// color="primary"
								onClick={(e) => onClick(name)}
								// sx={{ m: 1 }}
								>
								{name}
							</Button>
							</td>
						))}						
					</tr>
					<tr>					
						{buttonNames1.map((name, index) => (
							<td>
							<Button
								key={index}
								// variant="contained"
								// color="primary"
								onClick={() => onClick(name)}
								// sx={{ m: 1 }}
								>
								{name}
							</Button>
							</td>
						))}						
					</tr>
					<tr>					
						{buttonNames2.map((name, index) => (
							<td>
							<Button
								key={index}
								// variant="contained"
								// color="primary"
								onClick={() => onClick(name)}
								// sx={{ m: 1 }}
								>
								{name}
							</Button>
							</td>
						))}						
					</tr>
					<tr>					
						{buttonNames3.map((name, index) => (
							<td>
							<Button
								key={index}
								// variant="contained"
								// color="primary"
								onClick={() => onClick(name)}
								// sx={{ m: 1 }}
								>
								{name}
							</Button>
							</td>
						))}						
					</tr>
                    <tr>
                        <td colSpan={2} className="empty"></td>
                        {buttonNames4.map((name, index) => (
							<td>
							<Button
								key={index}
								// variant="contained"
								// color="primary"
								onClick={() => onClick(name)}
								// sx={{ m: 1 }}
								>
								{name}
							</Button>
							</td>
						))}
                        <td className="empty"></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="empty"></td>
                        {buttonNames5.map((name, index) => (
							<td>
							<Button
								key={index}
								// variant="contained"
								// color="primary"
								onClick={() => onClick(name)}
								// sx={{ m: 1 }}
								>
								{name}
							</Button>
							</td>
						))}
                    </tr>
                </tbody>
            </table>
        </div>
        {isOpen && <div id="level_selection">
            <button type="button" className="close">
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
            </button>
            <p className="level_intro_text">Choose which level is present in the spectra.</p>
            <div id="selected_element"><p id="el_symbol"></p><p id="el_name"></p></div>
            <ul id="element_levels"></ul>
            <div style={{ clear: 'both' }}></div>
        </div>}
    </div>} <Button onClick={() => handleToggle()}>Add Spectra Edge</Button>
		</fieldset> */}

		<fieldset>
			<legend>Microscope Acquisition Details</legend>
			{/* <input type="hidden" id="eelsdb_spectra_upload_nonce" name="eelsdb_spectra_upload_nonce" value="86deac9ca7" /><input type="hidden" name="_wp_http_referer" value="/submit-data/" />			 */}
			<div>
				<label>Microscope Name/Model</label>
				<div>
					<input/>
				</div>
            </div>
			<div>
				<label>Gun Type</label>
				<div>
					<input/>
				</div>
            </div>
			<div>
				<label>Incident Beam Energy</label>
				<div>
					<input placeholder="in kV"/>
				</div>
            </div>
			<div>
				<label>Resolution</label>
				<div>
					<input placeholder="in eV"/>
				</div>
            </div>
			<div>
				<label>Monochromated</label>
				<div>
					<select name="monochromated" id="monochromated">
						<option value="" selected>Select</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
			</div>
			<div>
				<label>Acquisition Mode</label>
				<div>
					<select name="monochromated" id="monochromated">
						<option value="" selected>Select</option>
						<option value="imagine">Imaging</option>
						<option value="diffraction">Diffraction</option>
						<option value="stem">STEM</option>
						<option value="xas electron yield">XAS Electron Yield</option>
						<option value="xas transmission">XAS Transmission</option>
						<option value="fluorescence">Fluorescence</option>
					</select>
				</div>
			</div>
			<div>
				<label>Convergence Semi-angle</label>
				<div>
					<input placeholder="in mrad"/>
				</div>
            </div>
			<div>
				<label>Collection Semi-angle</label>
				<div>
					<input placeholder="in mrad"/>
				</div>
            </div>
			<div>
				<label>Probe Size</label>
				<div>
					<input placeholder="in nm²"/>
				</div>
            </div>
			<div>
				<label>Beam Current</label>
				<div>
					<input/>
				</div>
            </div>
			<div>
				<label>Integration Time</label>
				<div>
					<input placeholder="in secs"/>
				</div>
            </div>
			<div>
				<label>Number of Readouts</label>
				<div>
					<input/>
				</div>
            </div>
			<div>
				<label>Detector</label>
				<div>
					<input/>
				</div>
            </div>
		</fieldset>
		<Button type="submit">Submit</Button>
		<div>{textInfo}</div>
	</form>
    </PageParent>

	
    )

}

export default FormPage