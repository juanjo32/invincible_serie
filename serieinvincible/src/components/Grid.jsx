import React from 'react'
import LateralNavbar from './LateralNavbar';
import '../styles/Grid.css';

export default function Grid(props) {
  //#3d5a80
  //#4fc2e0
  return (
    <div className="row mx-auto" >
      
      <LateralNavbar/>
      <div className="col-11 vh-100 overflow-auto px-5" style={{ backgroundColor: "#39c9eb" }}> {props.elemento} </div>
    </div>
  )
}
