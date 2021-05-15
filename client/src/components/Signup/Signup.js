import React, {useRef, useState} from 'react'
import{Card, Button, Form, Alert} from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from "../Contexts/AuthContext"

export default function Signup() {
    const emailRef =useRef()
    const nameRef =useRef()
    const passwordRef =useRef()
    const passwordConfirmRef =useRef()
    const [error, setError]= useState("")
    const {signup}=useAuth()
    const [loading, setLoading]= useState(false)
    const history =useHistory()

    async function handleSubmit(e){
      e.preventDefault()

      if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError("Password does not match") 
      }
      try{
        setError("")
        setLoading(true)
        await signup (emailRef.current.value, passwordRef.current.value)
        history.push("/")
      }catch{
        setError("failed to create")
      }
      setLoading(false)
    }
    return (
    <>
        <Card>
        <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && < Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>  
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>  
              <Form.Control type="Name" ref={nameRef} required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>  
              <Form.Control type="password" ref={passwordRef} required/>
            </Form.Group>
            <Form.Group id="password-Confirmation">
              <Form.Label>Password Confirmation</Form.Label>  
              <Form.Control type="password" ref={passwordConfirmRef} required/>
            </Form.Group>
            <Button disabled={loading} className= "w-100 mt-4" type ="submit">Sign Up</Button>
        </Form>
        </Card.Body>    
        </Card>  
        <div className="w-100 text-center mt-2">
              Already have an Account?  <Link to="/login">Log in</Link>
        </div>
    </>
    )
}
