import React from 'react'
import { render } from '@testing-library/react'

export default function Card(props) {
    return (
        <div className="card">
            <h1>The Sun RYZEs at (UTC):</h1>
            <h3>{props.sunriseTime}</h3>
            <img className="chart" src="https://geospatialclub.files.wordpress.com/2016/05/utc.jpg" alt="chart-img"/>
        </div>
    )
}
