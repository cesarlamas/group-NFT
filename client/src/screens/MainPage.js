import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';

export function MainPage() {
    const navigate = useNavigate();
    return (
        <div style={{position:"absolute",width:"100%",height:"100%",backgroundColor:"#2D2F2E"}} >
        <h1 style={{fontSize:"50px", color:"white",marginLeft:"3%",marginTop:"4%"}}>QUIERO DESCANSAR</h1>
        <h3 style={{position:"absolute",top:"25%",fontSize:"40px",color:"white",marginLeft:"3%"}}>Depedro</h3>
        <text style={{position:"absolute", top:"40%",fontSize:"25px",color:"grey", marginLeft:"3%"}}>@ Warner Music Spain</text>
        <img style={{position:"relative", left:"55%",bottom:"5%",height:"65%"}} src="https://res.cloudinary.com/dxrh21mkj/image/upload/v1639140075/ab67616d0000b273047ebc1a5434266d34688214_b1t7km.jpg"/>
        <hr style={{color:"white"}}></hr>
        <text style={{position:"absolute", color:"grey",marginLeft:"3%"}}>Countdown to pre-release</text>
        <br></br>
        <text style={{position:"absolute",color:"white",marginLeft:"3%"}}>0 days | 0 hours | 0 minutes </text>
        <Button variant="secondary" style={{position:"relative", left:"55%", bottom:"3%"}} onClick={()=> {navigate("/user")}}>Buy your ticket now EUR 2.99 EUR</Button>
      </div>
    )
}


