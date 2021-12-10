import React from 'react'
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { addUser } from '../apiService';
import { useNavigate } from 'react-router-dom';

function User() {
    const navigate = useNavigate();

    const list = {
        backgroundColor: '#2D2F2E',
        position: "absolute",
        height :"100%",
        width : "100%"
      }
      const input = {
        padding: 15,
        marginVertical: 0,
        fontSize: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: 40,
        paddingLeft: 20,
      }
      const button = {
        height: 40,
        width: '50%',
        borderRadius : 20,
        justifyContent: 'center',
        marginTop : "20px"
      }
      const buttonText= {
        color: 'black',
        alignSelf: 'center',
        fontSize: 16,
      }
      const form =  {
        borderRadius: 10,
        position: "relative",
        left : "40%",
        float: "left",
        marginTop : "10%",
      }

    const [user,setUser] = useState({
        name : "",
        surname: "",
        email:""
    })

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setUser((prevState) =>{
          return{
            ...prevState,
            [name]:value
          }
        })
        console.log(user)
      }

      const addNewUser = async( event) => {      
        event.preventDefault()
        addUser(user)
        navigate("/")
    }

    return (
        <div style={list}>
            <form style={form} className="form-group">
            <text style={{color:"white",fontSize:"50px"}}>Checkout form</text>
        <div>
       
        <input style={input} value={user.name} name="name" placeholder="Name" className="form-control" onChange={handleChange}></input>
        <input style={input} value={user.surname} name="surname" placeholder="Surname" className="form-control" onChange={handleChange} ></input>
        <input style={input} value={user.email} name="email" placeholder="Email" className="form-control" onChange={handleChange} ></input>
       
        </div>
        <div style={button}>
        <Button variant="btn btn-secondary" style={buttonText} type="submit" onClick={addNewUser}>Checkout</Button>
        </div>
        </form>
        </div>
    )
}

export default User
