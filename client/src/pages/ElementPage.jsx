import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import "./ElementPage.css";


function ElementPage() {
    const navigate = useNavigate();


    useEffect(() => {
        // TODO: fetch information from database and assign values to states

    });



    // get element information of element by passing state between routers
    const { state } = useLocation();
    const { atomicNumber, atomicMass, elementName, elementSymbol, elementType } = state;
    
    console.log(atomicNumber, atomicMass, elementName, elementSymbol, elementType);

    const options = {
        title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20
        },
        legend: {
            display: true,
            position: 'right'
        }
    };

    // TODO: deal with fixed label issue
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [dataset, setDataset] = useState([
        {
            label: 'Dataset 1',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            borderColor: 'rgb(250, 80, 10)',
            backgroundColor: 'rgba(250, 80, 10, 0.5)',
            yAxisID: 'y',
        }
    ]);

    const data = {
        labels,
        datasets: dataset,
    };
      
    // TODO: Change to element checkboxes later
    const addLine = () => {
        let newDataset = [...dataset,
            {
                label: 'Dataset 2',
                data: [19, 0, 5, 7, 2, 4, 8, 9, 10],
                borderColor: 'rgb(200, 99, 13)',
                backgroundColor: 'rgba(200, 99, 13, 0.5)',
                yAxisID: 'y',
            }
        ];
        
        setDataset(newDataset);
    };

    const removeLine = () => {
        const newDataset = [...dataset];
        newDataset.pop();
        setDataset(newDataset);
    };
    

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
                <div className="element-detail">
                    <p>Atomic Number: {atomicNumber}</p> 
                    <p>Atomic Mass: {atomicMass}</p>
                    <p>Name: {elementName}</p>
                    <p>Symbol: {elementSymbol}</p>
                    <p>Type: {elementType}</p>
                    <button onClick={() => addLine()}>Click me to add a new line</button>
                    <button onClick={() => removeLine()}>remove a line</button>
                </div>
                <div className="graph">
                    <Line data={data} />
                </div>
                <div className="table">
                    <ul>
                        <li>equipment 1</li>
                        <li>equipment 2</li>
                        <li>equipment 3</li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <p>about section: source data...</p>
            </div>
        </div>
    );
}


export default ElementPage;