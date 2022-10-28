import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ElementPage.css";


function ElementPage() {
    const navigate = useNavigate();

    // get element information of element by passing state between routers
    const { state } = useLocation();
    const { atomicNumber, atomicMass, elementName, elementSymbol, elementType } = state;
    
    console.log(atomicNumber, atomicMass, elementName, elementSymbol, elementType);
    
    return (
        <div className="element-page">
            <div className="top-bar">
                <button onClick={ () => navigate("/", {replace: true}) }>back</button>
                <div className="bar-content">
                    <img src="https://lh5.googleusercontent.com/W8cy8K7nJzzJCl2I3AORi8vzZk4-Q32gwgf33xNYfVZrYSqVEl6tekmZnV-O6ZPoB6fVpg=w16383)" alt="" />
                    <p>Here to place Lab's LOGO and top bar</p>
                </div>
            </div>
            <div className="middle">
                <p>Spectrum Plot for Fe</p>
                <img src="/assets/specturm_Fe.png" alt="cannot show image" />
                <p>By ...</p>
            </div>
            <div className="bottom">
                <p>about section: source data...</p>
            </div>
        </div>
    );
}


export default ElementPage;