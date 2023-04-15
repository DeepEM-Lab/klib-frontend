import { Box, Button, Grid, Paper, Typography} from "@mui/material"
import { useState } from "react";
import PeriodicTable from "../components/PeriodicTable/PeriodicTable"
import PageParent from "../structures/PageParent"

const FormPage = () => {

    const [isOpen, setIsOpen] = useState(false);
	const [elementList, setElement] = useState(0);

	// function onclick(name){
	// 	setElement(name);
	// }

	const buttonNames = ["K",  "Ca",  "Sc",  
	"Ti",  "V",  "Cr",  "Mn",  "Fe",  "Co",  "Ni",  "Cu",  "Zn",  "Ga",  "Ge",  "As",  
	"Se",  "Br",  "Kr"];

	const buttonNames1 = ["Rb",  "Sr",  "Y",  "Zr",  "Nb",  "Mo",  "Tc",  "Ru",  "Rh",  
	"Pd",  "Ag",  "Cd",  "In",  "Sn",  "Sb",  "Te",  "I",  "Xe"];

	const buttonNames2 = ["Cs",  "Ba",  "La",  
	"Hf",  "Ta",  "W",  "Re",  "Os",  "Ir",  "Pt",  "Au",  "Hg",  "Tl",  
	"Pb",  "Bi",  "Po",  "At",  "Rn"];

	const buttonNames3 = ["Fr",  "Ra",  "Ac",  "Rf",  "Db",  
	"Sg",  "Bh",  "Hs",  "Mt",  "Ds",  "Rg",  "Cn",  "Nh",  "Fl",  "Mc",  "Lv",  "Ts",  "Og"];

	const buttonNames4 = ["La",  "Ce",  "Pr",  "Nd",  "Pm",  "Sm",  "Eu",  "Gd",  "Tb",  "Dy",  "Ho",  "Er",  "Tm",  "Yb",  "Lu"];

	const buttonNames5 = ["Ac",  "Th",  "Pa",  "U",  "Np",  "Pu",  "Am",  "Cm",  "Bk",  "Cf",  "Es",  "Fm",  "Md",  "No",  "Lr"];
	
    function handleToggle() {
        setIsOpen(!isOpen);
    }
    return (
        <PageParent>
        {/* // <div className="row">
        // <div className="col-md-12">
        //         <h1>Submit Spectra</h1>
        //  <p className="lead" id="eelsdb_submit_introText">You can submit your X-Ray and Electron Energy Loss Spectroscopy data here. Published data is welcome.</p> */}
            <form id="eelsdb_submit_form" className="form-horizontal" method="post" action="https://eelsdb.eu/submit-data/" encType="multipart/form-data" role="form">
                    <fieldset>
                <legend>About You</legend>
                <div className="form-group two-field-form-group">
                    <label htmlFor="eelsdb_spectra_author_firstname" className="col-sm-3 col-lg-4 control-label required_label">Your Name</label>
                    <div className="col-sm-9 col-md-8 col-lg-5">
                        <input type="text" className="required form-control" id="eelsdb_spectra_author_firstname" name="eelsdb_spectra_author_firstname" placeholder="First name"/> &nbsp;
                        <input type="text" className="required form-control" id="eelsdb_spectra_author_lastname" name="eelsdb_spectra_author_lastname" placeholder="Last name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="eelsdb_spectra_author_email" className="col-sm-3 col-lg-4 control-label required_label">Email address</label>
                    <div className="col-sm-9 col-md-8 col-lg-5">
                        <input type="email" className="required email form-control" id="eelsdb_spectra_author_email" name="eelsdb_spectra_author_email" placeholder="Your e-mail address"/>
                        <span className="help-block"><strong>Note:</strong> An account will be created for you if you're not already registered.</span>
                    </div>
                </div>
            </fieldset>
             

            <fieldset>
                <legend>Spectrum Description</legend>
                <input type="hidden" id="eelsdb_spectra_upload_nonce" name="eelsdb_spectra_upload_nonce" value="86deac9ca7" /><input type="hidden" name="_wp_http_referer" value="/submit-data/" />			
				<div className="form-group">
                    <label htmlFor="post_title" className="col-sm-3 col-lg-4 control-label required_label">Specimen Name</label>
                    <div className="col-sm-9 col-md-8 col-lg-5">
                        <input type="text" className="required form-control" id="eelsdb_spectra_post_title" name="eelsdb_spectra_post_title"  value="" placeholder="Specimen name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="eelsdb_spectra_spectrumType" className="col-sm-3 col-lg-4 control-label required_label">Spectrum Type</label>
                    <div className="col-sm-9 col-md-8 col-lg-5">
                        <select className="form-control" name="eelsdb_spectra_spectrumType" id="eelsdb_spectra_spectrumType">
                            <option value="coreloss" >Core-loss</option>
                            <option value="lowloss" >Low-loss</option>
                            <option value="zeroloss" >Zero-loss</option>
                            <option value="xrayabs" >XRay Abs</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="eelsdb_spectra_spectrumUpload" className="col-sm-3 col-lg-4 control-label required_label">Data Upload</label>
                    <div className="col-sm-9 col-md-8 col-lg-5">
                                                    <div className="input-group">
                                    <span className="input-group-btn">
                                        <span className="btn btn-info btn-file">
                                            Browse&hellip; <input type="file" id="eelsdb_spectra_spectrumUpload" name="eelsdb_spectra_spectrumUpload" accept=".msa,.dm3,.csv,.txt" size="25"/>
                                        </span>
                                    </span>
                                    <input type="text" className="form-control" readOnly/>
                                </div>
                                                    <span className="help-block">Files can be in <code>.msa</code>, <code>.csv</code> or <code>.txt</code> format. Files must contain two columns of numbers separated by whitespace or a comma. Lines starting with a <code>#</code> will be ignored.</span>
                    </div>
                </div>
                <div className="form-group hide-zero">
                    <label htmlFor="eelsdb_spectra_spectrumFormula" className="col-sm-3 col-lg-4 control-label required_label">Specimen Formula</label>
                    <div className="col-sm-9 col-md-8 col-lg-5">
                        <input type="text" className="required form-control" id="eelsdb_spectra_spectrumFormula" name="eelsdb_spectra_spectrumFormula" value="" placeholder="Specimen Formula"/>
                    </div>
                </div>
                <div className="form-group hide-zero">
                    <label htmlFor="eelsdb_spectra_source_purity" className="col-sm-3 col-lg-4 control-label">Source and Purity</label>
                    <div className="col-sm-9 col-md-8 col-lg-5">
                        <input type="text" className="form-control" id="eelsdb_spectra_source_purity" name="eelsdb_spectra_source_purity" value="" placeholder="Source and Purity"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="eelsdb_spectra_spectrumKeywords" className="col-sm-3 col-lg-4 control-label">Associated Keywords</label>
                    <div className="col-sm-9 col-md-8 col-lg-5">
                        <input type="text" className="form-control" id="eelsdb_spectra_spectrumKeywords" name="eelsdb_spectra_spectrumKeywords" value="" placeholder="Separate keywords with commas"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="eelsdb_spectra_spectrumComments" className="col-sm-3 col-lg-4 control-label">Author Comments</label>
                    <div className="col-sm-9 col-md-8 col-lg-5">
                        <textarea className="form-control" id="eelsdb_spectra_spectrumComments" name="eelsdb_spectra_spectrumComments" placeholder="Author Comments"></textarea>
                    </div>
                </div>
            </fieldset>

            <fieldset className="hide-zero">
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
								// onClick={() => onClick(name)}
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
								// onClick={() => onClick(name)}
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
								// onClick={() => onClick(name)}
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
								// onClick={() => onClick(name)}
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
								// onClick={() => onClick(name)}
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
								// onClick={() => onClick(name)}
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
		</fieldset>

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

{/*
		<fieldset id="microscope_acquiisition_details_fieldset">
			<legend>Microscope Acquisition Details</legend>
						<div className="form-group">
				<label htmlFor="eelsdb_spectra_microscope" className="col-sm-3 col-lg-4 required_label control-label">Microscope Name / Model</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<input type="text" className="required form-control" id="eelsdb_spectra_microscope" name="eelsdb_spectra_microscope" value="" placeholder="Microscope Name"/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_guntype" className="col-sm-3 col-lg-4 required_label control-label">Gun Type</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<input type="text" className="required form-control" id="eelsdb_spectra_guntype" name="eelsdb_spectra_guntype" value="" placeholder="Gun Type"/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_beamenergy" className="col-sm-3 col-lg-4 required_label control-label">Incident Beam Energy</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="input-group">
						<input type="text" className="required form-control" id="eelsdb_spectra_beamenergy" name="eelsdb_spectra_beamenergy" value="" placeholder="Incident Beam Energy"/>
						<span className="input-group-addon">kV</span>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_resolution" className="col-sm-3 col-lg-4 required_label control-label">Resolution</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="input-group">
						<input type="text" className="required form-control" id="eelsdb_spectra_resolution" name="eelsdb_spectra_resolution" value="" placeholder="Resolution"/>
						<span className="input-group-addon">eV</span>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_monochromated" className="col-sm-3 col-lg-4 control-label">Monochromated</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="btn-group" data-toggle="buttons">
						<label className="btn-yes btn btn-default ">
							<input type="radio" name="eelsdb_spectra_monochromated" id="eelsdb_spectra_monochromated" value="1" /> Yes
						</label>
						<label className="btn-no btn btn-default ">
							<input type="radio" name="eelsdb_spectra_monochromated" value="0" /> No
						</label>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_acquisition_mode" className="col-sm-3 col-lg-4 control-label">Acquisition Mode</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<select className="form-control" id="eelsdb_spectra_acquisition_mode" name="eelsdb_spectra_acquisition_mode">
						<option value="">[ choose mode ]</option>
						<option value="imaging" >Imaging</option>
						<option value="diffraction" >Diffraction</option>
						<option value="stem" >STEM</option>
						<option value="xas-electron-yield" >XAS Electron Yield</option>
						<option value="xas-transmission" >XAS Transmission</option>
						<option value="fluorescence" >Fluorescence</option>
					</select>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_convergence" className="col-sm-3 col-lg-4 required_label control-label">Convergence Semi-angle</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="input-group">
						<input type="text" className="required form-control" id="eelsdb_spectra_convergence" name="eelsdb_spectra_convergence" value="" placeholder="Convergence Semi-angle"/>
						<span className="input-group-addon">mrad</span>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_collection" className="col-sm-3 col-lg-4 required_label control-label">Collection Semi-angle</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="input-group">
						<input type="text" className="required form-control" id="eelsdb_spectra_collection" name="eelsdb_spectra_collection" value="" placeholder="Collection Semi-angle"/>
						<span className="input-group-addon">mrad</span>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_probesize" className="col-sm-3 col-lg-4 control-label">Probe Size</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="input-group">
						<input type="text" className="form-control" id="eelsdb_spectra_probesize" name="eelsdb_spectra_probesize" value="" placeholder="Probe Size"/>
						<span className="input-group-addon">nm<sup>2</sup></span>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_beamcurrent" className="col-sm-3 col-lg-4 control-label">Beam Current</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<input type="text" className="form-control" id="eelsdb_spectra_beamcurrent" name="eelsdb_spectra_beamcurrent" value="" placeholder="Beam Current"/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_integratetime" className="col-sm-3 col-lg-4 control-label">Integration Time</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="input-group">
						<input type="text" className="form-control" id="eelsdb_spectra_integratetime" name="eelsdb_spectra_integratetime" value="" placeholder="Integrate Time"/>
						<span className="input-group-addon">secs</span>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_readouts" className="col-sm-3 col-lg-4 control-label">Number of Readouts</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<input type="text" className="form-control" id="eelsdb_spectra_readouts" name="eelsdb_spectra_readouts" value="" placeholder="Number of Readouts"/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_detector" className="col-sm-3 col-lg-4 required_label control-label">Detector</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<input type="text" className="required form-control" id="eelsdb_spectra_detector" name="eelsdb_spectra_detector" value="" placeholder="Detector"/>
				</div>
			</div>
		</fieldset>
		

		<fieldset className="hide-zero">
			<legend>Spectra Data Treatment Tags</legend>
						<div className="form-group">
				<label htmlFor="eelsdb_spectra_darkcurrent" className="col-sm-3 col-lg-4 control-label">Dark Current Correction</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="btn-group" data-toggle="buttons">
						<label className="btn-yes btn btn-default ">
							<input type="radio" name="eelsdb_spectra_darkcurrent" id="eelsdb_spectra_darkcurrent" value="1" /> Yes
						</label>
						<label className="btn-no btn btn-default active">
							<input type="radio" name="eelsdb_spectra_darkcurrent" value="0" checked="checked" /> No
						</label>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_gainvariation" className="col-sm-3 col-lg-4 control-label">Gain Variation Spectrum</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="btn-group" data-toggle="buttons">
						<label className="btn-yes btn btn-default ">
							<input type="radio" name="eelsdb_spectra_gainvariation" id="eelsdb_spectra_gainvariation" value="1" /> Yes
						</label>
						<label className="btn-no btn btn-default active">
							<input type="radio" name="eelsdb_spectra_gainvariation" value="0" checked="checked" /> No
						</label>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_calibration" className="col-sm-3 col-lg-4 required_label control-label">Calibration</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<input type="text" className="required form-control" id="eelsdb_spectra_calibration" name="eelsdb_spectra_calibration" value="" placeholder="Calibration"/>
                    <span className="help-block"><em>eg.</em> "low loss + drift tube" or "zero + dispersion"</span>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_thickness" className="col-sm-3 col-lg-4 control-label">Relative Thickness</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="input-group">
						<input type="text" className="form-control" id="eelsdb_spectra_thickness" name="eelsdb_spectra_thickness" value="" placeholder="Relative Thickness"/>
						<span className="input-group-addon">t/&lambda;</span>
					</div>
					<span className="help-block">Before plural scattering removal</span>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_deconv_fourier_log" className="col-sm-3 col-lg-4 control-label">Deconvolutions</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="input-group">
						<div className="checkbox">
							<label>
								<input type="checkbox" name="eelsdb_spectra_deconv_fourier_log" id="eelsdb_spectra_deconv_fourier_log" value="1" /> Fourier-log
							</label>
						</div>
						<div className="checkbox">
							<label>
								<input type="checkbox" name="eelsdb_spectra_deconv_fourier_ratio" value="1" /> Fourier-ratio
							</label>
						</div>
						<div className="checkbox">
							<label>
								<input type="checkbox" name="eelsdb_spectra_deconv_stephens_deconvolution" value="1" /> Stephen's deconvolution
							</label>
						</div>
						<div className="checkbox">
							<label>
								<input type="checkbox" name="eelsdb_spectra_deconv_richardson_lucy" value="1" /> Richardson-Lucy
							</label>
						</div>
						<div className="checkbox">
							<label>
								<input type="checkbox" name="eelsdb_spectra_deconv_maximum_entropy" value="0" /> Maximum-Entropy
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_deconv_other" className="col-sm-3 col-lg-4 control-label">Other Deconvolution</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<input type="text" className="form-control" id="eelsdb_spectra_deconv_other" name="eelsdb_spectra_deconv_other" value="" placeholder="Deconvolution Method"/>
				</div>
			</div>
		</fieldset>

		<fieldset>
			<legend>Associated Spectra</legend>
						<div className="form-group">
				<label htmlFor="eelsdb_spectra_assoc_spectra" className="col-sm-3 col-lg-4 control-label">EELS DB Spectra URLs</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<textarea class="form-control" id="eelsdb_spectra_assoc_spectra" name="eelsdb_spectra_assoc_spectra" rows="3"></textarea>
                    <span className="help-block">Add one URL per line, for each associated EELS DB spectra.</span>
                    <span className="help-block">These should look like <small><samp>https://eelsdb.eu/?post_type=spectra&p=1234</samp></small>
                         or <small><samp>https://eelsdb.eu/spectra/related-spectrum/</samp></small></span>
                    <span className="help-block">Note that you can add other relevant links below - see
                         <label for="eelsdb_spectra_otherURLs">Other URLs</label></span>
				</div>
			</div>
        </fieldset>

        <fieldset>
			<legend>Associated References</legend>
						<div className="form-group">
				<label htmlFor="eelsdb_spectra_ref_doi" className="col-sm-3 col-lg-4 control-label">DOI (Digital Object Identifier)</label>
				<div className="col-sm-7 col-md-6 col-lg-3">
					<input type="text" className="form-control" id="eelsdb_spectra_ref_doi" name="eelsdb_spectra_ref_doi" value="" placeholder="10.1063/1.1707491"/>
				</div>
                <div className="col-sm-2 text-right">
                  <button className="btn btn-default" id="find_doi">
                    <span class="glyphicon glyphicon-refresh glyphicon-spin" aria-hidden="true" style="display:none;" id="doi_spinner"></span>
                    Find ref
                  </button>
                </div>
			</div>
			<div className="form-group">
				<div className="col-sm-push-3 col-lg-push-4 col-sm-9 col-md-8 col-lg-5">
					<span className="help-block">If your work is not yet published, you can get a dataset DOI with <a href="http://www.zenodo.org" target="_blank">Zenodo</a>.</span>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_ref_url" className="col-sm-3 col-lg-4 control-label">Web Link</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<input type="text" className="url form-control" id="eelsdb_spectra_ref_url" name="eelsdb_spectra_ref_url" value="" placeholder="http://www.example.com"/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_ref_journal" className="col-sm-3 col-lg-4 control-label">Reference</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<div className="form-inline">
						<div className="form-group">
							<input type="text" className="form-control" id="eelsdb_spectra_ref_journal" name="eelsdb_spectra_ref_journal" value="" placeholder="Journal"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="eelsdb_spectra_ref_volume" name="eelsdb_spectra_ref_volume" value="" placeholder="Volume"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="eelsdb_spectra_ref_issue" name="eelsdb_spectra_ref_issue" value="" placeholder="Issue"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="eelsdb_spectra_ref_page" name="eelsdb_spectra_ref_page" value="" placeholder="Page"/>
						</div>
						<div className="form-group">
							<input type="text" className="number form-control" id="eelsdb_spectra_ref_year" name="eelsdb_spectra_ref_year" value="" placeholder="Year"/>
						</div>
					</div>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_ref_title" className="col-sm-3 col-lg-4 control-label">Reference Title</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<textarea className="form-control" id="eelsdb_spectra_ref_title" name="eelsdb_spectra_ref_title" placeholder="Title"></textarea>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_ref_authors" className="col-sm-3 col-lg-4 control-label">Reference Authors</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<textarea className="form-control" id="eelsdb_spectra_ref_authors" name="eelsdb_spectra_ref_authors" placeholder="Authors"></textarea>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="eelsdb_spectra_otherURLs" className="col-sm-3 col-lg-4 control-label">Other URLs</label>
				<div className="col-sm-9 col-md-8 col-lg-5">
					<textarea className="form-control" id="eelsdb_spectra_otherURLs" name="eelsdb_spectra_otherURLs" placeholder="Other relevant URLs"></textarea>
					<span className="help-block">One per line. Follow the URL with the text that you would like to be displayed. <em>eg.</em> <small><samp>http://www.example.com My Nice Website</samp></small></span>
				</div>
			</div>
		</fieldset>

		<fieldset>
			<div className="form-group">
				<div className="col-sm-offset-3 col-lg-offset-4 col-sm-9 col-md-8 col-lg-5">
					<div className="checkbox">
						<label>
							<input type="checkbox" name="eelsdb_spectra_agreement" id="eelsdb_spectra_agreement" value="true" required/>
							By submitting this data to the EELS Data Base, I agree to license it under the Open Data Commons Open Database License. My work can be re-used, as long as myself and the EELS Data Base are credited.
						</label>
						<span className="help-block">Find out more about the Open Data Commons Open Database License (ODbL) licence here: <a href="http://opendatacommons.org/licenses/odbl/" target="_blank">http://opendatacommons.org/licenses/odbl/</a></span>
					</div>
				</div>
			</div>
		</fieldset>

		<fieldset className="form-actions">
			<div className="form-group">
				<div className="col-sm-offset-3 col-lg-offset-4 col-sm-9 col-md-8 col-lg-5">
					<input type="submit" name="eelsdb_spectra_submit_btn" id="eelsdb_spectra_submit_btn" className="btn btn-lg btn-primary" value="Submit Spectrum"/>
									</div>
			</div>
		</fieldset> */}
	</form>
    </PageParent>

	
// {/* // 	</div> 
// // </div> */}
    )

}

export default FormPage